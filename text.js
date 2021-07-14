



  const testFunch = (s, t)=> {
      const max = Math.max(s.length,t.length);
      console.log('dd ', max)

      for (let i = 0; i < max; i++){
          console.log('see',s.charAt(i));
          if(s.charAt(i) != s.charAt(i)){
              console.log('final result', s.charAt(i) || t.charAt(i))
          }
      }
  }

  s = 'abcd';
  t = 'abcde';
  console.log(testFunch(s,t));
