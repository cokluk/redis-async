
const connection = { 
    host: GetConvar("redis_host", "127.0.0.1"),  
    port: parseInt(GetConvar("redis_port", 6379)),
    debug: true
};


const Redis = require("async-redis");
var client = Redis.createClient(connection); 
 
client.on('ready', function () {  console.log("[redis-async] Connection established...");   connection.ready == true; });

client.on('connect', function () {  console.log("[redis-async] Connecting..."); });

client.on('reconnecting', function () {  console.log("[redis-async] Trying reconnecting..."); });

client.on('end', function () { console.log("[redis-async] Connecting lost...");  connection.ready = null;   });

 
global.exports("ready", () => { return connection.ready; });

global.exports("ping", () => { if(connection.ready) return "PONG"; });

global.exports("disconnect", async () => {  await client.quit();  });

global.exports("connect", async (data) => {  await client.connect(); });

global.exports("getSync", async (key, del, callback) => {
    let cb = callback;
    get(key, del, function(data) {  
       cb(data)
    });
});


global.exports("_keys", async (key, callback) => {
  let cb = callback;
  _keys(key, function(data) { cb(data)  });
});

async function _keys(key, callback) { 
  try {
    callback(await client.keys(key));
  }catch(err) {
    callback(err);
  } 
}


global.exports("_sdiff", async (key, callback) => {
  let cb = callback;
  console.log(...key);
});


global.exports("_scard", async (key, callback) => {
  let cb = callback;
  _scard(key, function(data) { cb(parseInt(data))  });
});

async function _scard(key, callback) { 
  try {
    callback(await client.scard(key));
  }catch(err) {
    callback(err);
  } 
}
 
global.exports("_smove", async (key, key2, val, callback) => {
  let cb = callback;
  _smove(key, key2, val, function(data) { cb(data)  });
});

async function _smove(key, key2, val, callback) { 
  try {
    callback(await client.smove(key, key2, val));
  }catch(err) {
    callback(err);
  } 
}
 
 
global.exports("_lrange", async (key, bas, bit, callback) => {
    let cb = callback;
    lrange(key, bas, bit, function(data) { cb(data)  });
});

async function lrange(key, bas, bit, callback) { 
    try {
      callback(await client.lrange(key, bas, bit));
    }catch(err) {
      callback(err);
    } 
}

global.exports("_smembers", async (key, callback) => {
    let cb = callback;
    smembers(key, function(data) { cb(data)  });
});

async function smembers(key, callback) { 
    try {
      callback(await client.smembers(key));
    }catch(err) {
      callback(err);
    } 
}
 
global.exports("set", async (key, val) => {
    try { await client.set(key, val);  }catch(err) {  console.log(err);   }
});

global.exports("sadd", async (key, val) => {
    try { await client.sadd(key, val);  }catch(err) {  console.log(err);   }
});

global.exports("srem", async (key, val) => {
    try { await client.srem(key, val);  }catch(err) {  console.log(err);   }
});

global.exports("rpush", async (key, ...val) => {
    try { await client.rpush(key, ...val);  }catch(err) {  console.log(err);   }
});
 
global.exports("lset", async (key, i, val) => {
    try { await client.lset(key, i, val);  }catch(err) {  console.log(err);   }
});

global.exports("linsert", async (key, pivot, i, val) => {
  try { await client.linsert(key, pivot, i, val);  }catch(err) {  console.log(err);   }
});

global.exports("lrem", async (key, i, val) => {
  try { await client.lrem(key, i, val);  }catch(err) {  console.log(err);   }
});

global.exports("lpush", async (key, val) => {
  try { await client.lpush(key, val);  }catch(err) {  console.log(err);   }
});

global.exports("lpushx", async (key, val) => {
  try { await client.lpushx(key, val);  }catch(err) {  console.log(err);   }
});

global.exports("ltrim", async (key, bas, bit) => {
  try { await client.ltrim(key, bas, bit);  }catch(err) {  console.log(err);   }
});

global.exports("del", async (key) => {
  try { await client.del(key);  }catch(err) {  console.log(err);   }
});

global.exports("_lindex", async (key, i, callback) => {
  let cb = callback;
  _lindex(key, i, function(data) {  
     cb(data)
  });
});

async function _lindex(key, i, callback) {
  try {
    callback(await client.lindex(key, i));
  }catch(err) {
    callback(err);
  } 
}


global.exports("_rpop", async (key, callback) => {
  let cb = callback;
  console.log(key);
  _rpop(key, function(data) {  
     cb(data)
  });
});

async function _rpop(key, callback) {
  try {
    console.log(await client.rpop(key));
    callback(await client.rpop(key));
  }catch(err) {
    callback(err);
  } 
}

 
global.exports("_llen", async (key, callback) => {
  let cb = callback;
  _llen(key, function(data) {  
     cb(data)
  });
});

async function _llen(key, callback) {
  try {
    callback(await client.llen(key));
  }catch(err) {
    callback(err);
  } 
}


global.exports("_incr", async (key, callback) => {
  let cb = callback;
  _incr(key, function(data) {  
     cb(parseInt(data))
  });
});

async function _incr(key, callback) {
  try {
    callback(await client.incr(key));
  }catch(err) {
    callback(err);
  } 
}

async function get(key, del, callback) { 
   try {
     callback(await client.get(key));
     if(del)
     await client.del(key);
   }catch(err) {
     callback(err);
   } 
}

 
if(connection.debug == false)
   console.log = () => { return false; }