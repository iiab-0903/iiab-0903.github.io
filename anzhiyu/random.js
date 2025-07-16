var posts=["2025/04/28/hello-world/","2025/07/16/图灵竞赛系统-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };