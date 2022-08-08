# redis-async
Redis Client for Fivem (BETA)

Use redis commands async with exports on the fivem system. It does not support terminal commands, only redis commands are supported.

| Support OS  | Version |
| ------------- | ------------- |
| Linux  | Redis 4.0.9 or higher  |
| Windows  | Redis 3.0.504 or higher  |

## Convars

| Convar  | Default | Type |
| ------------- | ------------- | ------------- |
| redis_host  | "127.0.0.1"  | String |
| redis_port  | 6379  | Int |

No Pipeline support yet!

# Usage

### redis:get
Get the value of key. If the key does not exist the special value nil is returned. An error is returned if the value stored at key is not a string, because GET only handles string values.

Return
Bulk string reply: the value of key, or nil when key does not exist.
```lua
exports["redis-async"]:get(KEY)
```
### redis:getdel
Get the value of key and delete the key. This command is similar to GET, except for the fact that it also deletes the key on success (if and only if the key's value type is a string).

Return
Bulk string reply: the value of key, nil when key does not exist, or an error if the key's value type isn't a string.
```lua
exports["redis-async"]:getdel(KEY)
```
### redis:set
Set key to hold the string value. If key already holds a value, it is overwritten, regardless of its type. Any previous time to live associated with the key is discarded on successful SET operation.

Return
Simple string reply: OK if SET was executed correctly.

Null reply: (nil) if the SET operation was not performed because the user specified the NX or XX option but the condition was not met.
```lua
exports["redis-async"]:set(KEY, VALUE)
```
### redis:sadd
Add the specified members to the set stored at key. Specified members that are already a member of this set are ignored. If key does not exist, a new set is created before adding the specified members.

An error is returned when the value stored at key is not a set.

Return
Integer reply: the number of elements that were added to the set, not including all the elements already present in the set.
```lua
exports["redis-async"]:sadd(KEY, VALUE)
```
### redis:smembers
Returns all the members of the set value stored at key.

This has the same effect as running SINTER with one argument key.

Return
Array reply: all elements of the set.
```lua
exports["redis-async"]:smembers(KEY)
```
### redis:srem
Remove the specified members from the set stored at key. Specified members that are not a member of this set are ignored. If key does not exist, it is treated as an empty set and this command returns 0.

An error is returned when the value stored at key is not a set.

Return
Integer reply: the number of members that were removed from the set, not including non existing members.
```lua
exports["redis-async"]:srem(KEY, VALUE)
```
### redis:scard
Returns the set cardinality (number of elements) of the set stored at key.

Return
Integer reply: the cardinality (number of elements) of the set, or 0 if key does not exist.
```lua
exports["redis-async"]:scard(KEY)
```
### redis:smove
Move member from the set at source to the set at destination. This operation is atomic. In every given moment the element will appear to be a member of source or destination for other clients.

Return
Integer reply, specifically:

- 1 if the element is moved.
- 0 if the element is not a member of source and no operation was performed.
```lua
exports["redis-async"]:smove(KEY, KEY2, VALUE)
```
### redis:rpush
Insert all the specified values at the tail of the list stored at key. If key does not exist, it is created as empty list before performing the push operation. When key holds a value that is not a list, an error is returned.

Return
Integer reply: the length of the list after the push operation.
```lua
exports["redis-async"]:rpush(KEY, ...VALUE)
```
### redis:lset
Sets the list element at index to element. For more information on the index argument, see LINDEX.

An error is returned for out of range indexes.

Return
Simple string reply
```lua
exports["redis-async"]:lset(KEY, INDEX, VALUE)
```
### redis:lrange
Returns the specified elements of the list stored at key. The offsets start and stop are zero-based indexes, with 0 being the first element of the list (the head of the list), 1 being the next element and so on.

These offsets can also be negative numbers indicating offsets starting at the end of the list. For example, -1 is the last element of the list, -2 the penultimate, and so on.

Return
Array reply: list of elements in the specified range.
```lua
exports["redis-async"]:lrange(KEY, START_RANGE, END_RANGE)
```
### redis:disconnect (experimental)
The redis connection is terminated.
```lua
exports["redis-async"]:disconnect()
```
### redis:llen
Returns the length of the list stored at key. If key does not exist, it is interpreted as an empty list and 0 is returned. An error is returned when the value stored at key is not a list.

Return
Integer reply: the length of the list at key.
```lua
exports["redis-async"]:llen(KEY)
```
### redis:lindex
Returns the element at index index in the list stored at key. The index is zero-based, so 0 means the first element, 1 the second element and so on. Negative indices can be used to designate elements starting at the tail of the list. Here, -1 means the last element, -2 means the penultimate and so forth.

When the value at key is not a list, an error is returned.

Return
Bulk string reply: the requested element, or nil when index is out of range.
```lua
exports["redis-async"]:lindex(KEY, INDEX)
```
### redis:linsert
Inserts element in the list stored at key either before or after the reference value pivot.

When key does not exist, it is considered an empty list and no operation is performed.

An error is returned when key exists but does not hold a list value.

Return
Integer reply: the length of the list after the insert operation, or -1 when the value pivot was not found.
```lua
exports["redis-async"]:linsert(KEY, PIVOT, INDEX_VAL, VALUE)
```
### redis:lrem
Removes the first count occurrences of elements equal to element from the list stored at key. The count argument influences the operation in the following ways:

Return
Integer reply: the number of removed elements.
```lua
exports["redis-async"]:lrem(KEY, INDEX, VALUE)
```
### redis:lpush
Insert all the specified values at the head of the list stored at key. If key does not exist, it is created as empty list before performing the push operations. When key holds a value that is not a list, an error is returned.

Return
Integer reply: the length of the list after the push operations.
```lua
exports["redis-async"]:lpush(KEY, VALUE)
```
### redis:lpushx
Inserts specified values at the head of the list stored at key, only if key already exists and holds a list. In contrary to LPUSH, no operation will be performed when key does not yet exist.

Return
Integer reply: the length of the list after the push operation.
```lua
exports["redis-async"]:lpushx(KEY, VALUE)
```
### redis:ltrim
Trim an existing list so that it will contain only the specified range of elements specified. Both start and stop are zero-based indexes, where 0 is the first element of the list (the head), 1 the next element and so on.

For example: LTRIM foobar 0 2 will modify the list stored at foobar so that only the first three elements of the list will remain.

Return
Simple string reply
```lua
exports["redis-async"]:ltrim(KEY, START_RANGE, END_RANGE)
```
### redis:del
Removes the specified keys. A key is ignored if it does not exist.

Return
Integer reply: The number of keys that were removed.
```lua
exports["redis-async"]:del(KEY)
```
### redis:rpop
Removes and returns the last elements of the list stored at key.

By default, the command pops a single element from the end of the list. When provided with the optional count argument, the reply will consist of up to count elements, depending on the list's length.

Return
When called without the count argument:

Bulk string reply: the value of the last element, or nil when key does not exist.

When called with the count argument:

Array reply: list of popped elements, or nil when key does not exist.
```lua
exports["redis-async"]:rpop(KEY)
```
### redis:incr
Increments the number stored at key by one. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers.

Return
Integer reply: the value of key after the increment
```lua
exports["redis-async"]:incr(KEY)
```
### redis:keys
Returns all keys matching pattern.

While the time complexity for this operation is O(N), the constant times are fairly low. For example, Redis running on an entry level laptop can scan a 1 million key database in 40 milliseconds.

Warning: consider KEYS as a command that should only be used in production environments with extreme care. It may ruin performance when it is executed against large databases. This command is intended for debugging and special operations, such as changing your keyspace layout. Don't use KEYS in your regular application code. If you're looking for a way to find keys in a subset of your keyspace, consider using SCAN or sets.

Supported glob-style patterns:

- h?llo matches hello, hallo and hxllo
- h*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo
- Use \ to escape special characters if you want to match them verbatim.

Return
Array reply: list of keys matching pattern.
```lua
exports["redis-async"]:keys(PATTERN)
```
