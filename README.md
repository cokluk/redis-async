# redis-async
Redis Client for Fivem (BETA)

Use redis commands async with exports on the fivem system. It does not support terminal commands, only redis commands are supported.

| Support OS  | Version |
| ------------- | ------------- |
| Linux  | Redis 4.0.9 or higher  |
| Windows  | Redis 3.0.504 or higher  |


# Usage

### redis:get
Key data returns
```lua
exports["redis-async"]:get(KEY)
```
### redis:getdel
key returns and deletes data
```lua
exports["redis-async"]:getdel(KEY)
```
