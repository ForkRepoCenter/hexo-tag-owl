# hexo-tag-owl #

[![NPM version](https://badge.fury.io/js/hexo-tag-owl.svg)](http://badge.fury.io/js/hexo-tag-owl)
[![Code Climate](https://codeclimate.com/github/m80126colin/hexo-tag-owl.png)](https://codeclimate.com/github/m80126colin/hexo-tag-owl)
[![License](http://img.shields.io/npm/l/hexo-tag-owl.svg)](LICENSE.md)

An useful media tag for [Hexo] 3.x, [Demo page]

## Features ##

* Various videos and images sources embedding
* Support videos website:
  * [Youtube](https://www.youtube.com/)
  * [Niconico](http://www.nicovideo.jp/)
  * [Bilibili](http://www.bilibili.com/)
  * [Vimeo](https://vimeo.com/)
  * [Tudou](http://www.tudou.com/)
  * [Youku](http://www.youku.com/)
  * [Tencent](http://v.qq.com/)
* Support images sources:
  * Local images
* Auto stylesheet embedding

## Installation ##

Run the following command in the root directory of hexo:

```
npm install hexo-tag-owl --save
```

## Introduction ##

### Component Concept ###

All components are wrapped by a `<div>` tag with several classes. All components have at least one class `.owl-media`:

```
<div class="owl-media">[component]</div>
```

### Auto Stylesheet Embedding ###

```
owl:
  css: default
  file: owl
```

* **css**: decide whether insert default stylesheet or not, with value `default` or `none`.
* **file**: the path of stylesheet when **css** is `default`, and default value is `root + owl.css`

## Videos ##

Every components of this category have additional class `.owl-video`.

```
<div class="owl-media owl-video">[component]</div>
```

Each videos source will add additional class `.owl-[source]`:

* Youtube: `.owl-youtube`
* Niconico: `.owl-niconico`
* Bilibili: `.owl-bilibili`
* Vimeo: `.owl-vimeo`
* Tudou: `.owl-tudou`
* Youku: `.owl-youku`
* Tencent: `.owl-tencent`

### Usage ###

```
{% owl youtube youtube_id %}
{% owl niconico niconico_id [type] %}
{% owl bilibili bilibili_id [page] %}
{% owl vimeo vimeo_id %}
{% owl tudou tudou_id %}
{% owl youku youku_id %}
{% owl tencent tencent_id %}
```

* **youtube_id** - video id on Youtube
* **vimeo_id** - video id in Vimeo.
* Niconico
  * **niconico_id** - video id in Niconico.
  * **type** - embeded type. There are only `thumb` and `watch` two options. Default is set as `thumb`.
    * `thumb`: set nico in thumb mode with extra class `.niconico-thumb`
    * `watch`: set nico in watch mode with extra class `.niconico-watch`
* Bilibili
  * **bilibili_id** - video id in Bilibili. You can use either `av247371` or `247371`.
  * **page** - if video have several clips, you can add a number indicated the video.
* **tudou_id** - video id in Tudou.
* **youku_id** - video id in Youku. You can use either `id_XMTc3MzcxMjQw` or `XMTc3MzcxMjQw`.
* **tencent_id** - video id in Tencent Video.

### Examples ###

```
{% owl youtube YtuAOT_c2EA %}
{% owl niconico sm1494658 %}
{% owl niconico sm1494658 watch %}
{% owl bilibili av247371 %}
{% owl bilibili 247371 %}
{% owl bilibili av367901 2 %}
{% owl vimeo 5566538 %}
{% owl tudou pRsx83aRLLs %}
{% owl youku id_XMTc3MzcxMjQw %}
{% owl tencent o03134mlm8j %}
```

## Images ##

Every components of this category have additional class `.owl-image`.

```
<div class="owl-media owl-image">[component]</div>
```

### Local Images ###

Insert your image from blog\'s path.

#### Usage ####

```
{% owl local image_path %}
```

* **image_path** - relative path from your blog.

#### Example ####

```
{% owl local img/img.jpg %}
{% owl local another-img.gif %}
```

## Default CSS ##

Because the components are lack of CSS, everyone can add some CSS for one's preference. Here provide a default CSS written in stylus in `lib/asset/css.styl`.

## Contributors ##

* Tao Wang: Tencent (騰訊視頻) plugin function

## License ##

MIT

[Hexo]: https://hexo.io
[Demo page]: http://m80126colin.github.io/hexo-tag-owl-demo/