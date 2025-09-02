var posts=["2025/07/19/HIVE/","2025/04/28/hello-world/","2025/07/16/图灵竞赛系统/","2025/07/19/软件工程/","2025/09/02/廉政系统项目计划书/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };