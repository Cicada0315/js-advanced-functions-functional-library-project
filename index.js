const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof(collection) === "object"){
        let objarr=Object.values(collection)
        for(let j=0; j<objarr.length; j++){
          callback(objarr[j]);
        }
      }
      else{
        for(let i=0; i<collection.length; i++){
          callback(collection[i]);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let output=[];
      if (typeof(collection) === "object"){
        let objarr=Object.values(collection)
        for(let j=0; j<objarr.length; j++){
          output.push(callback(objarr[j]));
        }
      }
      else{
        for(let i=0; i<collection.length; i++){
          output.push(callback(collection[i]));
        }
      }
      return output;
    },

    reduce: function(collection, callback, initial_value) {
      if (!initial_value){
        initial_value=collection[0];
      }
      else{
        initial_value=callback(initial_value, collection[0], collection);
      }
      for(let i=1; i<collection.length; i++){
        initial_value=callback(initial_value, collection[i], collection)
      }
      return initial_value;
    },

    find: function(collection, callback) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }

      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, callback) {
      let newarr=[];
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          newarr.push(collection[i]);
        }
      }
      return newarr;
    },

    size: function(collection) {
      if (typeof(collection) === "object"){
        let objarr=Object.keys(collection)
        return objarr.length;
      }
      else{
        return collection.length;
      }
    },

    first: function(collction, num) {
      if(!num){
        return collction[0];
      }
      else{
        let arr=[];
        for(let i=0; i<num; i++){
          arr.push(collction[i]);
        }
        return arr;
      }
    },

    last: function(collction, num) {
      if(!num){
        return collction[collction.length-1];
      }
      else{
        let arr=[];
        for(let i=collction.length-1, j=0; j<num; i--, j++){
          arr.unshift(collction[i]);
        }
        return arr;
      }
    },
    compact: function(collection) {
      let newarr=[];
      for(let i=0; i<collection.length; i++){
        if (collection[i]){
          newarr.push(collection[i]);
        }
      }
      return newarr;
    },

    sortBy: function(collection, callback) {
      let copyarr=[...collection];
      return copyarr.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(collection, flag) {
      if (flag){
        d=1;
        return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
      }
      else{
        return arr.reduce((acc, val) => acc.concat(val), []);
      }
      
    },

    uniq: function(collection) {
      let newarr=[];
      for(let i=0; i<collection.length; i++){
        if (typeof(collection[i]) === "object"){
          let objarr=Object.keys(collection[i])
          for(let j=0; j<objarr.length; j++){
            output.push(callback(objarr[j]));
          }
        }
        else{
          for(let i=0; i<collection.length; i++){
            output.push(callback(collection[i]));
          }
        }
        return output;

      }
    },

    keys: function(obj) {
      let keyarr=[];
      for(const key in obj){
        keyarr.push(key);
      }
      return keyarr;
    },
    
    values: function(obj) {
      let keyarr=[];
      for(const key in obj){
        keyarr.push(obj[key]);
      }
      return keyarr;
    },
    functions: function() {

    }
  }
})()

fi.libraryMethod()
