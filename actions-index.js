import { Mongo } from 'meteor/mongo';
import { EasySearch } from 'meteor/easysearch:core';

const Actions = new Mongo.Collection('actions');

export const ActionsIndex = new EasySearch.Index({
  engine: new EasySearch.MongoDB({
    sort() {
      return { score: { $meta: 'textScore' }, createdAt: -1 };
    },
    fields() {
      return { score: { $meta: 'textScore' } };
    },
    selector(searchObject, options, aggregation) {
      // Filter action views by project members
      const { userId, props } = options.search;
      const { workspace, checked } = props;
      const selector = {};
      selector.workspace = workspace;
      selector.checked = checked;
      selector.deleted = false;

      // We need to get regex results first because mongo doesn't support full text search and regex in the same query.
      // regex is searching for exact text match and then we combine the results of it with full text results
      const regexQuery = selector;
      regexQuery.$or = this.defaultConfiguration().selector(searchObject, options, aggregation).$or;
      const regexResults = Actions.find(regexQuery, { limit: 30, sort: { createdAt: -1 } }).map(r => r._id);

      // use \" around the words for phrase matching
      // https://docs.mongodb.com/manual/reference/operator/query/text/#phrases
      const matches = searchObject.title.match(/\b(\w+)\b/g) || [];
      const tokensArray = matches.map(t => `\"${t}\"`); // eslint-disable-line
      const query = `${tokensArray.join(' ')}`;

      // regexResults
      selector.$or = [{ _id: { $in: regexResults } }, { $text: { $search: query } }];
      return selector;
    },
  }),
  collection: Actions,
  fields: ['title', 'description'],
  defaultSearchOptions: {
    limit: 30,
  },
  permission({ userId, props }) {
    return true;
  },
  // countUpdateIntervalMs: false,
});
