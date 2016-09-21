---
layout: default
---

<!-- <ul>
  {% for category in site.categories %}
    <li>
      <a href="{{category.url}}" >{{ category | first }}</a>
    </li>
  {% endfor %}
</ul> -->


<ul>
  {% for post in site.posts %}
  <li>
  <a href="{{post.url}}"> {{post.title}} : </a>
   <i>{{post.description}}</i>
  </li>
  {% endfor %}
</ul>
