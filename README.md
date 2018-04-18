# Reproduction of $meta issue with Redis oplog and easy:search
To start:
1. `meteor npm i`
2. `npm start`
3. Go to http://localhost:3000
4. Enter anything into the search input
5. Observe errors on server (sample below)


```
I20180418-18:32:25.085(-4)? Exception from sub actions/easySearch id Lc9Y36AovboKAKfms MinimongoError: Minimongo doesn't support operators in projections yet.
I20180418-18:32:25.086(-4)?     at MinimongoError (packages/minimongo/common.js:1087:17)
I20180418-18:32:25.086(-4)?     at Object.keys.forEach.keyPath (packages/minimongo/local_collection.js:845:13)
I20180418-18:32:25.087(-4)?     at Array.forEach (<anonymous>)
I20180418-18:32:25.087(-4)?     at Function.LocalCollection._checkSupportedProjection.fields [as _checkSupportedProjection] (packages/minimongo/local_collection.js:832:23)
I20180418-18:32:25.087(-4)?     at Function.LocalCollection._compileProjection.fields [as _compileProjection] (packages/minimongo/local_collection.js:866:19)
I20180418-18:32:25.087(-4)?     at new ObservableCollection (packages/cultofcoders:redis-oplog/lib/cache/ObservableCollection.js:89:55)
I20180418-18:32:25.088(-4)?     at new PublicationEntry (packages/cultofcoders:redis-oplog/lib/cache/PublicationEntry.js:20:37)
I20180418-18:32:25.088(-4)?     at PublicationFactory.create (packages/cultofcoders:redis-oplog/lib/cache/PublicationFactory.js:44:32)
I20180418-18:32:25.088(-4)?     at createPublicationEntry (packages/cultofcoders:redis-oplog/lib/mongo/extendObserveChanges.js:37:33)
I20180418-18:32:25.089(-4)?     at Cursor.observe (packages/cultofcoders:redis-oplog/lib/mongo/extendObserveChanges.js:25:20)
I20180418-18:32:25.089(-4)?     at Subscription.<anonymous> (packages/easysearch:core/lib/core/search-collection.js:216:46)
I20180418-18:32:25.090(-4)?     at Subscription._handler (packages/cultofcoders:redis-oplog/lib/publishWithRedis.js:27:30)
I20180418-18:32:25.090(-4)?     at maybeAuditArgumentChecks (packages/ddp-server/livedata_server.js:1768:12)
I20180418-18:32:25.090(-4)?     at DDP._CurrentPublicationInvocation.withValue (packages/ddp-server/livedata_server.js:1043:15)
I20180418-18:32:25.091(-4)?     at Meteor.EnvironmentVariable.EVp.withValue (packages/meteor.js:1186:12)
I20180418-18:32:25.091(-4)?     at Subscription._runHandler (packages/ddp-server/livedata_server.js:1041:51)
I20180418-18:32:25.091(-4)?     at Session._startSubscription (packages/ddp-server/livedata_server.js:859:9)
I20180418-18:32:25.092(-4)?     at Session.sub (packages/ddp-server/livedata_server.js:625:12)
I20180418-18:32:25.092(-4)?     at packages/ddp-server/livedata_server.js:559:43
I20180418-18:32:25.343(-4)? SEARCHING...
I20180418-18:32:25.345(-4)? SORT
I20180418-18:32:25.345(-4)? FIELDS
I20180418-18:32:25.349(-4)? Exception in onStop callback: ReferenceError: resultsHandle is not defined
I20180418-18:32:25.349(-4)?     at Subscription.<anonymous> (packages/easysearch:core/lib/core/search-collection.js:203:9)
I20180418-18:32:25.350(-4)?     at runWithEnvironment (packages/meteor.js:1238:24)
I20180418-18:32:25.350(-4)?     at packages/meteor.js:1251:14
I20180418-18:32:25.350(-4)?     at packages/ddp-server/livedata_server.js:1155:7
I20180418-18:32:25.350(-4)?     at Array.forEach (<anonymous>)
I20180418-18:32:25.350(-4)?     at Function._.each._.forEach (packages/underscore.js:139:11)
I20180418-18:32:25.351(-4)?     at Subscription._callStopCallbacks (packages/ddp-server/livedata_server.js:1154:7)
I20180418-18:32:25.351(-4)?     at Subscription._deactivate (packages/ddp-server/livedata_server.js:1144:10)
I20180418-18:32:25.351(-4)?     at Session._stopSubscription (packages/ddp-server/livedata_server.js:871:30)
I20180418-18:32:25.351(-4)?     at Subscription.error (packages/ddp-server/livedata_server.js:1196:19)
I20180418-18:32:25.351(-4)?     at Subscription._runHandler (packages/ddp-server/livedata_server.js:1052:12)
I20180418-18:32:25.351(-4)?     at Session._startSubscription (packages/ddp-server/livedata_server.js:859:9)
I20180418-18:32:25.352(-4)?     at Session.sub (packages/ddp-server/livedata_server.js:625:12)
I20180418-18:32:25.352(-4)?     at packages/ddp-server/livedata_server.js:559:43
I20180418-18:32:25.352(-4)? Exception from sub actions/easySearch id fRfDAbc2xwECkhksK MinimongoError: Minimongo doesn't support operators in projections yet.
I20180418-18:32:25.411(-4)?     at MinimongoError (packages/minimongo/common.js:1087:17)
I20180418-18:32:25.411(-4)?     at Object.keys.forEach.keyPath (packages/minimongo/local_collection.js:845:13)
I20180418-18:32:25.412(-4)?     at Array.forEach (<anonymous>)
I20180418-18:32:25.412(-4)?     at Function.LocalCollection._checkSupportedProjection.fields [as _checkSupportedProjection] (packages/minimongo/local_collection.js:832:23)
I20180418-18:32:25.412(-4)?     at Function.LocalCollection._compileProjection.fields [as _compileProjection] (packages/minimongo/local_collection.js:866:19)
I20180418-18:32:25.412(-4)?     at new ObservableCollection (packages/cultofcoders:redis-oplog/lib/cache/ObservableCollection.js:89:55)
I20180418-18:32:25.412(-4)?     at new PublicationEntry (packages/cultofcoders:redis-oplog/lib/cache/PublicationEntry.js:20:37)
I20180418-18:32:25.412(-4)?     at PublicationFactory.create (packages/cultofcoders:redis-oplog/lib/cache/PublicationFactory.js:44:32)
I20180418-18:32:25.413(-4)?     at createPublicationEntry (packages/cultofcoders:redis-oplog/lib/mongo/extendObserveChanges.js:37:33)
I20180418-18:32:25.413(-4)?     at Cursor.observe (packages/cultofcoders:redis-oplog/lib/mongo/extendObserveChanges.js:25:20)
I20180418-18:32:25.413(-4)?     at Subscription.<anonymous> (packages/easysearch:core/lib/core/search-collection.js:216:46)
I20180418-18:32:25.413(-4)?     at Subscription._handler (packages/cultofcoders:redis-oplog/lib/publishWithRedis.js:27:30)
I20180418-18:32:25.413(-4)?     at maybeAuditArgumentChecks (packages/ddp-server/livedata_server.js:1768:12)
I20180418-18:32:25.413(-4)?     at DDP._CurrentPublicationInvocation.withValue (packages/ddp-server/livedata_server.js:1043:15)
I20180418-18:32:25.413(-4)?     at Meteor.EnvironmentVariable.EVp.withValue (packages/meteor.js:1186:12)
I20180418-18:32:25.414(-4)?     at Subscription._runHandler (packages/ddp-server/livedata_server.js:1041:51)
I20180418-18:32:25.414(-4)?     at Session._startSubscription (packages/ddp-server/livedata_server.js:859:9)
I20180418-18:32:25.414(-4)?     at Session.sub (packages/ddp-server/livedata_server.js:625:12)
I20180418-18:32:25.415(-4)?     at packages/ddp-server/livedata_server.js:559:43
```