var posts=["2025/07/19/HIVE-md/","2025/04/28/hello-world/","2025/07/19/软件工程-md/","2025/07/19/廉政管理系统-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };