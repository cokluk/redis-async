exports('get', function (key)
    local res = {}
    local finished = false
    exports["redis-async"]:getSync(key, function(result)
      res = result
      finished = true
    end)
    repeat Citizen.Wait(0) until finished == true
    return res
end)

exports('getdel', function (key)
  local res = {}
  local finished = false
  exports["redis-async"]:getSync(key, true, function(result)
    res = result
    finished = true
  end)
  repeat Citizen.Wait(0) until finished == true
  return res
end)

exports('smembers', function (key)
   local res = {}
   local finished = false
   exports["redis-async"]:_smembers(key, function(result)
     res = result
     finished = true
   end)
   repeat Citizen.Wait(0) until finished == true
   return res
end)

exports('lrange', function (key, bas, bit)
   local res = {}
   local finished = false
   exports["redis-async"]:_lrange(key, bas, bit, function(result)
     res = result
     finished = true
   end)
   repeat Citizen.Wait(0) until finished == true
   return res
end)

exports('llen', function (key)
  local res = {}
  local finished = false
  exports["redis-async"]:_llen(key, function(result)
    res = result
    finished = true
  end)
  repeat Citizen.Wait(0) until finished == true
  return res
end)


exports('lindex', function (key, i)
  local res = {}
  local finished = false
  exports["redis-async"]:_lindex(key, i, function(result)
    res = result
    finished = true
  end)
  repeat Citizen.Wait(0) until finished == true
  return res
end)

exports('rpop', function (key)
  local res = {}
  local finished = false
  exports["redis-async"]:_rpop(key, function(result)
    res = result
    finished = true
  end)
  repeat Citizen.Wait(0) until finished == true
  return res
end)
 
exports('incr', function (key)
  local res = {}
  local finished = false
  exports["redis-async"]:_incr(key, function(result)
    res = result
    finished = true
  end)
  repeat Citizen.Wait(0) until finished == true
  return res
end)
 

exports('keys', function (key)
  local res = {}
  local finished = false
  exports["redis-async"]:_keys(key, function(result)
    res = result
    finished = true
  end)
  repeat Citizen.Wait(0) until finished == true
  return res
end)

exports('scard', function (key)
  local res = {}
  local finished = false
  exports["redis-async"]:_scard(key, function(result)
    res = result
    finished = true
  end)
  repeat Citizen.Wait(0) until finished == true
  return res
end)


exports('smove', function (key, key2, val)
  local res = {}
  local finished = false
  exports["redis-async"]:_smove(key, key2, val, function(result)
    res = result
    finished = true
  end)
  repeat Citizen.Wait(0) until finished == true
  return res
end)

 

--  exports["redis-async"]:get(KEY)
--  exports["redis-async"]:getdel(KEY)


--  exports["redis-async"]:set(KEY, VALUE)
--  exports["redis-async"]:sadd(KEY, VALUE)
--  exports["redis-async"]:smembers(KEY)
--  exports["redis-async"]:srem(KEY, VALUE)
--  exports["redis-async"]:scard(KEY)
--  exports["redis-async"]:smove(KEY, KEY2, VALUE)
 

--  exports["redis-async"]:rpush(KEY, ...VALUE)
--  exports["redis-async"]:lset(KEY, INDEX, VALUE)
--  exports["redis-async"]:lrange(KEY, START_RANGE, END_RANGE)
--  exports["redis-async"]:disconnect() -- experimental
--  exports["redis-async"]:llen(KEY)
--  exports["redis-async"]:lindex(KEY, INDEX)
--  exports["redis-async"]:linsert(KEY, PIVOT, INDEX_VAL, VALUE)
--  exports["redis-async"]:lrem(KEY, INDEX, VALUE)
--  exports["redis-async"]:lpush(KEY, VALUE)
--  exports["redis-async"]:lpushx(KEY, VALUE)
--  exports["redis-async"]:ltrim(KEY, START_RANGE, END_RANGE)
--  exports["redis-async"]:del(KEY)
--  exports["redis-async"]:rpop(KEY)
--  exports["redis-async"]:incr(KEY)
--  exports["redis-async"]:keys(PATTERN)

 