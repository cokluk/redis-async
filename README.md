# redis-async
Redis Client for Fivem (BETA)

Use redis commands async with exports on the fivem system. It does not support terminal commands, only redis commands are supported.

| Support OS  | Version |
| ------------- | ------------- |
| Linux  | Redis 4.0.9 or higher  |
| Windows  | Redis 3.0.504 or higher  |


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
