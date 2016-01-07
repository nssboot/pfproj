



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>ourPetProject/petBreed.js at develop · Steph-harris/ourPetProject</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Steph-harris/ourPetProject" name="twitter:title" /><meta content="ourPetProject - Front-End Group Project" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/12535567?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/12535567?v=3&amp;s=400" property="og:image" /><meta content="Steph-harris/ourPetProject" property="og:title" /><meta content="https://github.com/Steph-harris/ourPetProject" property="og:url" /><meta content="ourPetProject - Front-End Group Project" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTQ5NTEzMzU6YWMxZjBmYmYzYjIzYjAxZTE0M2RkYjM4YTMxNmY0NGE6ZjNiOTM4NGM3NjhiMDhjMjY4NjQxM2ViNmMxZTk3ZWI2OGFmZGRmODlhMDE4OWE2MTVhNmU4MDRhZGNjNWQ2ZQ==--82e9dcc4f1732f24308225e3fe716797539196bc">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="6C238A79:448D:32C2AFFC:568AE345" name="octolytics-dimension-request_id" /><meta content="14951335" name="octolytics-actor-id" /><meta content="nssboot" name="octolytics-actor-login" /><meta content="1a3336eb4b04145ec20486d71f0dabd49c96ee323fb6e11aef06df8e58fd351d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="nssboot">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="cfa6681cc4295db23c9d83918058d221857b0ee5" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-5ccfffb27ecb48e213b8582952578f145ffded2d5c7e090e9d9b98e7a9f7e4d2.css" integrity="sha256-XM//sn7LSOITuFgpUlePFF/97S1cfgkOnZuY56n35NI=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-692b0b1ba861c5b4055d33b157feb7f5b35ce646135cd0db80ce5d0b2293500d.css" integrity="sha256-aSsLG6hhxbQFXTOxV/639bNc5kYTXNDbgM5dCyKTUA0=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="184bffbef27a3a47c29b9b2f87efa791">

      
  <meta name="description" content="ourPetProject - Front-End Group Project">
  <meta name="go-import" content="github.com/Steph-harris/ourPetProject git https://github.com/Steph-harris/ourPetProject.git">

  <meta content="12535567" name="octolytics-dimension-user_id" /><meta content="Steph-harris" name="octolytics-dimension-user_login" /><meta content="48078189" name="octolytics-dimension-repository_id" /><meta content="Steph-harris/ourPetProject" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="48078189" name="octolytics-dimension-repository_network_root_id" /><meta content="Steph-harris/ourPetProject" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Steph-harris/ourPetProject/commits/develop.atom" rel="alternate" title="Recent Commits to ourPetProject:develop" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github "></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Steph-harris/ourPetProject/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/Steph-harris/ourPetProject/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:nssboot"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-bell "></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="Steph-harris/ourPetProject">This repository</span>
  </div>
    <a class="dropdown-item" href="/Steph-harris/ourPetProject/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/nssboot"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@nssboot" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/14951335?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">nssboot</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/nssboot" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="cfa6681cc4295db23c9d83918058d221857b0ee5" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6UGi60CwKN0Pamobb4Pr9A1Y6nvnXaRzsIS0HPd1RQlMy9BlPUhtHVFrhgfI+0K6fTBWJO4Q0tcrn918iIus8A==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="cfa6681cc4295db23c9d83918058d221857b0ee5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="rmqzU0b/St7VgWyRDx3oQ+Zs69kPYR/jCkhDVwG2lVDpkxXwilOEOw0qNIaZtLFLSKAvtyGnuxk7t7GyNHk1rQ==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="48078189" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/Steph-harris/ourPetProject/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <span class="octicon octicon-eye "></span>
              Unwatch
            </span>
          </a>
          <a class="social-count js-social-count" href="/Steph-harris/ourPetProject/watchers">
            3
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-mute"></span>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Steph-harris/ourPetProject/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="cfa6681cc4295db23c9d83918058d221857b0ee5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HNXgQpyXBFgxWaI00E9ziZZP0894Q5rK/UeWIJaPbSp+9lIFtYvPAj52oziwMb+FZsR2V8yhiW8N8Wdd6hfAfA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Steph-harris/ourPetProject"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star "></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Steph-harris/ourPetProject/stargazers">
          0
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Steph-harris/ourPetProject/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="cfa6681cc4295db23c9d83918058d221857b0ee5" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5L2ws1sx51Op8R/P0kVaOmtXDlCtsWe1w9gxBUXs5ZF62ueUbJm6dXFCjhLO1+z8jJHfegKhxzsrEPTENafUQw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Steph-harris/ourPetProject"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star "></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/Steph-harris/ourPetProject/stargazers">
          0
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of Steph-harris/ourPetProject to your account"
              aria-label="Fork your own copy of Steph-harris/ourPetProject to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <span class="octicon octicon-repo-forked "></span>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/Steph-harris/ourPetProject/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/Steph-harris/ourPetProject/network" class="social-count">
      0
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo "></span>
  <span class="author"><a href="/Steph-harris" class="url fn" itemprop="url" rel="author"><span itemprop="title">Steph-harris</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/Steph-harris/ourPetProject" data-pjax="#js-repo-pjax-container">ourPetProject</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/Steph-harris/ourPetProject" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Steph-harris/ourPetProject">
    <span class="octicon octicon-code "></span>
    Code
</a>
    <a href="/Steph-harris/ourPetProject/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Steph-harris/ourPetProject/issues">
      <span class="octicon octicon-issue-opened "></span>
      Issues
      <span class="counter">0</span>
</a>
  <a href="/Steph-harris/ourPetProject/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /Steph-harris/ourPetProject/pulls">
    <span class="octicon octicon-git-pull-request "></span>
    Pull requests
    <span class="counter">0</span>
</a>
    <a href="/Steph-harris/ourPetProject/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /Steph-harris/ourPetProject/wiki">
      <span class="octicon octicon-book "></span>
      Wiki
</a>
  <a href="/Steph-harris/ourPetProject/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /Steph-harris/ourPetProject/pulse">
    <span class="octicon octicon-pulse "></span>
    Pulse
</a>
  <a href="/Steph-harris/ourPetProject/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /Steph-harris/ourPetProject/graphs">
    <span class="octicon octicon-graph "></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/Steph-harris/ourPetProject/blob/6726e6c8e1b84dfd8437be033edaec82121642da/scripts/petBreed.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d211fa2cd3528745761b26d2866e5058 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="develop"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">develop</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Find or create a branch…" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Steph-harris/ourPetProject/blob/Creator/scripts/petBreed.js"
               data-name="Creator"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Creator">
                Creator
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Steph-harris/ourPetProject/blob/develop/scripts/petBreed.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="develop">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Steph-harris/ourPetProject/blob/master/scripts/petBreed.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Steph-harris/ourPetProject/blob/navLinks/scripts/petBreed.js"
               data-name="navLinks"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="navLinks">
                navLinks
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Steph-harris/ourPetProject/blob/nssboot/scripts/petBreed.js"
               data-name="nssboot"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="nssboot">
                nssboot
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Steph-harris/ourPetProject/blob/nssnewpet/scripts/petBreed.js"
               data-name="nssnewpet"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="nssnewpet">
                nssnewpet
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Steph-harris/ourPetProject/blob/wikiLinkFix/scripts/petBreed.js"
               data-name="wikiLinkFix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="wikiLinkFix">
                wikiLinkFix
              </span>
            </a>
        </div>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Steph-harris/ourPetProject/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" data-form-nonce="cfa6681cc4295db23c9d83918058d221857b0ee5" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6mX9IUAgggdt8ew5znThF7VHIEdIURGEZQ48YErIZAGrks7zmo08djs73k+xHeTOiMyNnnHrZ+X0Eex7vgHLhQ==" /></div>
            <span class="octicon octicon-git-branch select-menu-item-icon"></span>
            <div class="select-menu-item-text">
              <span class="select-menu-item-heading">Create branch: <span class="js-new-item-name"></span></span>
              <span class="description">from ‘develop’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="develop">
            <input type="hidden" name="path" id="path" value="scripts/petBreed.js">
</form>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/Steph-harris/ourPetProject/find/develop"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Steph-harris/ourPetProject" class="" data-branch="develop" data-pjax="true" itemscope="url"><span itemprop="title">ourPetProject</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Steph-harris/ourPetProject/tree/develop/scripts" class="" data-branch="develop" data-pjax="true" itemscope="url"><span itemprop="title">scripts</span></a></span><span class="separator">/</span><strong class="final-path">petBreed.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/Steph-harris/ourPetProject/contributors/develop/scripts/petBreed.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/Steph-harris/ourPetProject/raw/develop/scripts/petBreed.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/Steph-harris/ourPetProject/blame/develop/scripts/petBreed.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/Steph-harris/ourPetProject/commits/develop/scripts/petBreed.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop "></span>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Steph-harris/ourPetProject/edit/develop/scripts/petBreed.js" class="inline-form js-update-url-with-hash" data-form-nonce="cfa6681cc4295db23c9d83918058d221857b0ee5" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pfgQKl9kAy9k38NKKBQRvyTj3081MC84rR0d5MQXN9daxUMn+ryRGWAc05fmKruUTzV08UeFMonqzw3rqd9H2A==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Edit this file" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil "></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Steph-harris/ourPetProject/delete/develop/scripts/petBreed.js" class="inline-form" data-form-nonce="cfa6681cc4295db23c9d83918058d221857b0ee5" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xCiy/KOqy/gSj3M/1RekU3fezCWuzSoXvaENw1JQdYiiyOrSKTOvMO4DF/HrpmSlpNWsqJgG/ClXbIntOHRhtQ==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete this file" data-disable-with>
            <span class="octicon octicon-trashcan "></span>
          </button>
</form>  </div>

  <div class="file-info">
      117 lines (97 sloc)
      <span class="file-info-divider"></span>
    3.66 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">ready</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#noAnimal<span class="pl-pds">&quot;</span></span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#noZip<span class="pl-pds">&quot;</span></span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#selectBreed<span class="pl-pds">&quot;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> animal <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#animal2<span class="pl-pds">&quot;</span></span>).<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(animal <span class="pl-k">===</span> <span class="pl-c1">null</span>){</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#noAnimal<span class="pl-pds">&quot;</span></span>).<span class="pl-en">show</span>().<span class="pl-en">fadeOut</span>(<span class="pl-c1">3500</span>);</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    } </td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">  })</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">//on animal2 selection populate the breed list</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">//animal alert needs 2 event listeners: one for search button, and one for breed button</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#animal2<span class="pl-pds">&quot;</span></span>).<span class="pl-en">change</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> animal <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#animal2<span class="pl-pds">&quot;</span></span>).<span class="pl-en">val</span>(); </td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.menu<span class="pl-pds">&quot;</span></span>).<span class="pl-en">empty</span>();  </td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">breedChecker</span>();   </td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#selectBreed<span class="pl-pds">&#39;</span></span>).<span class="pl-en">select2</span>();</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.breedSearch<span class="pl-pds">&quot;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">e</span>.<span class="pl-en">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">searchByBreed</span>();</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">breedChecker</span>(){   </td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> animal <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#animal2<span class="pl-pds">&quot;</span></span>).<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> petFAPI <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>https://crossorigin.me/https://api.petfinder.com/breed.list?<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> petFAPIParam <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">      key<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>311acd0ca6ee16428a93eb5dafe77634<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      animal<span class="pl-k">:</span> animal,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">      format<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({     </td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">      type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">      url<span class="pl-k">:</span> petFAPI <span class="pl-k">+</span> <span class="pl-smi">$</span>.<span class="pl-en">param</span>(petFAPIParam),</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">response</span>){</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> breeds <span class="pl-k">=</span> <span class="pl-smi">response</span>.<span class="pl-smi">petfinder</span>.<span class="pl-smi">breeds</span>.<span class="pl-smi">breed</span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span><span class="pl-smi">breeds</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> lstItm <span class="pl-k">=</span> breeds[i][<span class="pl-s"><span class="pl-pds">&#39;</span>$t<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> newDiv <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;option&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>value<span class="pl-pds">&quot;</span></span>,[lstItm]).<span class="pl-c1">text</span>(lstItm);</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.menu<span class="pl-pds">&quot;</span></span>).<span class="pl-en">append</span>(newDiv);</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">//add class item to each and append to .menu</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">function</span> <span class="pl-en">newList</span>(<span class="pl-smi">lstItm</span>){;</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> newDiv <span class="pl-k">=</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>item<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">              .<span class="pl-c1">text</span>(lstItm);</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.menu<span class="pl-pds">&quot;</span></span>).<span class="pl-en">append</span>(newDiv);       </td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> newDiv;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">searchByBreed</span>(){   </td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> animal <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#animal2<span class="pl-pds">&quot;</span></span>).<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> breedVal <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#selectBreed<span class="pl-pds">&quot;</span></span>).<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> petFAPI <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>https://crossorigin.me/https://api.petfinder.com/pet.getRandom?<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> petFAPIParam <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">      key<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>311acd0ca6ee16428a93eb5dafe77634<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">      animal<span class="pl-k">:</span> animal,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">      breed<span class="pl-k">:</span> breedVal,</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">      output<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>full<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">      format<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#breedResult<span class="pl-pds">&quot;</span></span>).<span class="pl-en">empty</span>();</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.photoRow<span class="pl-pds">&quot;</span></span>).<span class="pl-en">empty</span>();</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({     </td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">      type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">      url<span class="pl-k">:</span> petFAPI <span class="pl-k">+</span> <span class="pl-smi">$</span>.<span class="pl-en">param</span>(petFAPIParam),</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">response</span>){</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> newPetInfo <span class="pl-k">=</span> <span class="pl-smi">response</span>.<span class="pl-smi">petfinder</span>.<span class="pl-smi">pet</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> newPetContact <span class="pl-k">=</span> <span class="pl-smi">response</span>.<span class="pl-smi">petfinder</span>.<span class="pl-smi">pet</span>.<span class="pl-smi">contact</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> petOptions <span class="pl-k">=</span> <span class="pl-smi">response</span>.<span class="pl-smi">petfinder</span>.<span class="pl-smi">pet</span>.<span class="pl-c1">options</span>.<span class="pl-smi">option</span>;</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> petPhoto <span class="pl-k">=</span> <span class="pl-smi">response</span>.<span class="pl-smi">petfinder</span>.<span class="pl-smi">pet</span>.<span class="pl-c1">media</span>.<span class="pl-smi">photos</span>.<span class="pl-smi">photo</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> yourPet <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;h2&gt;Meet <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">newPetInfo</span>.<span class="pl-c1">name</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, a size <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">newPetInfo</span>.<span class="pl-c1">size</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">newPetInfo</span>.<span class="pl-smi">age</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> <span class="pl-smi">newPetInfo</span>.<span class="pl-smi">sex</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> from <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">newPetContact</span>.<span class="pl-smi">city</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">newPetContact</span>.<span class="pl-smi">state</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/h2&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> yourPetP <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;p&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>col-xs-12 col-md-6<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">text</span>(<span class="pl-smi">newPetInfo</span>.<span class="pl-c1">description</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> yourPetContact <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;h3&gt;To adopt <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">newPetInfo</span>.<span class="pl-c1">name</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, please call <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">newPetContact</span>.<span class="pl-smi">phone</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/h3&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>col-xs-12<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#breedResult<span class="pl-pds">&quot;</span></span>).<span class="pl-en">prepend</span>(yourPetP);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#breedResult<span class="pl-pds">&quot;</span></span>).<span class="pl-en">prepend</span>(yourPet);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#breedResult<span class="pl-pds">&quot;</span></span>).<span class="pl-en">append</span>(yourPetContact);</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span><span class="pl-smi">petPhoto</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">          </td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(petPhoto[i][<span class="pl-s"><span class="pl-pds">&quot;</span>@size<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>pn<span class="pl-pds">&quot;</span></span>){            </td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> newPetPic <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;img&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>, petPhoto[i][<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>])</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">              .<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>img-responsive<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> newPetPicDiv <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>col-xs-6 col-md-3<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">newPetPicDiv</span>.<span class="pl-en">append</span>(newPetPic);</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.photoRow<span class="pl-pds">&quot;</span></span>).<span class="pl-en">append</span>(newPetPicDiv);</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span><span class="pl-smi">petOptions</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> newPDiv <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>col-xs-6 col-md-2 well well-sm<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> newP <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;h4&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">text</span>(petOptions[i][<span class="pl-s"><span class="pl-pds">&quot;</span>$t<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">newPDiv</span>.<span class="pl-en">append</span>(newP);</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#breedResult<span class="pl-pds">&quot;</span></span>).<span class="pl-en">append</span>(newPDiv);</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// contact-city+ state+ zip email phone</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github " title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.07532s from github-fe141-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-7460qJ7p88i3YTMH/liaj1cFgX987ie+xRzl6WMjSr8=" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-W4O6Y+5YUQjsuCwXDQ5s0A5CQRTzHswN4c+YLlNrcNg=" src="https://assets-cdn.github.com/assets/github-5b83ba63ee585108ecb82c170d0e6cd00e424114f31ecc0de1cf982e536b70d8.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

