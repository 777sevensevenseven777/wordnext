import * as React from 'react';
import css from 'styled-jsx/css';

interface IProps {
    className?: string;
}

export default function AdminBar({className}: IProps) {
    return (
        <div id="wpadminbar" className={className}>
            <div
                className="quicklinks"
                id="wp-toolbar"
                role="navigation"
                aria-label="Toolbar"
            >
                <ul id="wp-admin-bar-root-default" className="ab-top-menu">
                    <li id="wp-admin-bar-menu-toggle">
                        <a className="ab-item" href="#" aria-expanded="false">
                            <span className="ab-icon" aria-hidden="true"></span>
                            <span className="screen-reader-text">Menu</span>
                        </a>
                    </li>
                    <li id="wp-admin-bar-wp-logo" className="menupop">
                        <a className="ab-item" aria-haspopup="true" href="#">
                            <span className="ab-icon" aria-hidden="true"></span>
                            <span className="screen-reader-text">
                                About WordPress
                            </span>
                        </a>
                        <div className="ab-sub-wrapper">
                            <ul
                                id="wp-admin-bar-wp-logo-default"
                                className="ab-submenu"
                            >
                                <li id="wp-admin-bar-about">
                                    <a className="ab-item" href="#">
                                        About WordPress
                                    </a>
                                </li>
                            </ul>
                            <ul
                                id="wp-admin-bar-wp-logo-external"
                                className="ab-sub-secondary ab-submenu"
                            >
                                <li id="wp-admin-bar-wporg">
                                    <a className="ab-item" href="#">
                                        WordPress.org
                                    </a>
                                </li>
                                <li id="wp-admin-bar-documentation">
                                    <a className="ab-item" href="#">
                                        Documentation
                                    </a>
                                </li>
                                <li id="wp-admin-bar-support-forums">
                                    <a className="ab-item" href="#">
                                        Support
                                    </a>
                                </li>
                                <li id="wp-admin-bar-feedback">
                                    <a className="ab-item" href="#">
                                        Feedback
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li id="wp-admin-bar-site-name" className="menupop">
                        <a className="ab-item" aria-haspopup="true" href="#">
                            WordNext
                        </a>
                        <div className="ab-sub-wrapper">
                            <ul
                                id="wp-admin-bar-site-name-default"
                                className="ab-submenu"
                            >
                                <li id="wp-admin-bar-view-site">
                                    <a className="ab-item" href="#">
                                        Visit Site
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li id="wp-admin-bar-comments">
                        <a className="ab-item" href="#">
                            <span className="ab-icon" aria-hidden="true"></span>
                            <span
                                className="ab-label awaiting-mod pending-count count-0"
                                aria-hidden="true"
                            >
                                0
                            </span>
                            <span className="screen-reader-text comments-in-moderation-text">
                                0 Comments in moderation
                            </span>
                        </a>
                    </li>
                    <li id="wp-admin-bar-new-content" className="menupop">
                        <a className="ab-item" aria-haspopup="true" href="#">
                            <span className="ab-icon" aria-hidden="true"></span>
                            <span className="ab-label">New</span>
                        </a>
                        <div className="ab-sub-wrapper">
                            <ul
                                id="wp-admin-bar-new-content-default"
                                className="ab-submenu"
                            >
                                <li id="wp-admin-bar-new-post">
                                    <a className="ab-item" href="#">
                                        Post
                                    </a>
                                </li>
                                <li id="wp-admin-bar-new-media">
                                    <a className="ab-item" href="#">
                                        Media
                                    </a>
                                </li>
                                <li id="wp-admin-bar-new-page">
                                    <a className="ab-item" href="#">
                                        Page
                                    </a>
                                </li>
                                <li id="wp-admin-bar-new-user">
                                    <a className="ab-item" href="#">
                                        User
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul
                    id="wp-admin-bar-top-secondary"
                    className="ab-top-secondary ab-top-menu"
                >
                    <li
                        id="wp-admin-bar-my-account"
                        className="menupop with-avatar"
                    >
                        <a className="ab-item" aria-haspopup="true" href="#">
                            Howdy,{' '}
                            <span className="display-name">wordnext</span>
                            <img
                                alt=""
                                src="https://secure.gravatar.com/avatar/51ef0fef4680bfe58f120a6da2b7c472?s=26&amp;d=mm&amp;r=g"
                                srcSet="https://secure.gravatar.com/avatar/51ef0fef4680bfe58f120a6da2b7c472?s=52&amp;d=mm&amp;r=g 2x"
                                className="avatar avatar-26 photo"
                                height="26"
                                width="26"
                                loading="lazy"
                            />
                        </a>
                        <div className="ab-sub-wrapper">
                            <ul
                                id="wp-admin-bar-user-actions"
                                className="ab-submenu"
                            >
                                <li id="wp-admin-bar-user-info">
                                    <a
                                        className="ab-item"
                                        tabIndex={-1}
                                        href="#"
                                    >
                                        <img
                                            alt=""
                                            src="https://secure.gravatar.com/avatar/51ef0fef4680bfe58f120a6da2b7c472?s=64&amp;d=mm&amp;r=g"
                                            srcSet="https://secure.gravatar.com/avatar/51ef0fef4680bfe58f120a6da2b7c472?s=128&amp;d=mm&amp;r=g 2x"
                                            className="avatar avatar-64 photo"
                                            height="64"
                                            width="64"
                                            loading="lazy"
                                        />
                                        <span className="display-name">
                                            wordnext
                                        </span>
                                    </a>
                                </li>
                                <li id="wp-admin-bar-edit-profile">
                                    <a className="ab-item" href="#">
                                        Edit Profile
                                    </a>
                                </li>
                                <li id="wp-admin-bar-logout">
                                    <a className="ab-item" href="#">
                                        Log Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <a className="screen-reader-shortcut" href="#">
                Log Out
            </a>

            <style jsx>{styles}</style>
        </div>
    )
}

const styles = css`
#wpadminbar * {
    height: auto;
    width: auto;
    margin: 0;
    padding: 0;
    position: static;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    font-size: 13px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
        sans-serif;
    line-height: 2.46153846;
    border-radius: 0;
    box-sizing: content-box;
    transition: none;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
}
.rtl #wpadminbar * {
    font-family: Tahoma, sans-serif;
}
html:lang(he-il) .rtl #wpadminbar * {
    font-family: Arial, sans-serif;
}styled-jsx/webpack
#wpadminbar .ab-empty-item {
    cursor: default;
}
#wpadminbar .ab-empty-item,
#wpadminbar a.ab-item,
#wpadminbar > #wp-toolbar span.ab-label,
#wpadminbar > #wp-toolbar span.noticon {
    color: #f0f0f1;
}
#wpadminbar #wp-admin-bar-my-sites a.ab-item,
#wpadminbar #wp-admin-bar-site-name a.ab-item {
    white-space: nowrap;
}
#wpadminbar ul li:after,
#wpadminbar ul li:before {
    content: normal;
}
#wpadminbar a,
#wpadminbar a img,
#wpadminbar a img:hover,
#wpadminbar a:hover {
    border: none;
    text-decoration: none;
    background: 0 0;
    box-shadow: none;
}
#wpadminbar a:active,
#wpadminbar a:focus,
#wpadminbar div,
#wpadminbar input[type='email'],
#wpadminbar input[type='number'],
#wpadminbar input[type='password'],
#wpadminbar input[type='search'],
#wpadminbar input[type='text'],
#wpadminbar input[type='url'],
#wpadminbar select,
#wpadminbar textarea {
    box-shadow: none;
}
#wpadminbar a:focus {
    outline-offset: -1px;
}
#wpadminbar {
    direction: ltr;
    color: #c3c4c7;
    font-size: 13px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
        sans-serif;
    line-height: 2.46153846;
    height: 32px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 600px;
    z-index: 99999;
    background: #1d2327;
}
#wpadminbar .ab-sub-wrapper,
#wpadminbar ul,
#wpadminbar ul li {
    background: 0 0;
    clear: none;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    text-indent: 0;
    z-index: 99999;
}
#wpadminbar ul#wp-admin-bar-root-default > li {
    margin-right: 0;
}
#wpadminbar .quicklinks ul {
    text-align: left;
}
#wpadminbar li {
    float: left;
}
#wpadminbar .ab-empty-item {
    outline: 0;
}
#wpadminbar .quicklinks .ab-top-secondary > li {
    float: right;
}
#wpadminbar .quicklinks .ab-empty-item,
#wpadminbar .quicklinks a,
#wpadminbar .shortlink-input {
    height: 32px;
    display: block;
    padding: 0 10px;
    margin: 0;
}
#wpadminbar .quicklinks > ul > li > a {
    padding: 0 8px 0 7px;
}
#wpadminbar .menupop .ab-sub-wrapper,
#wpadminbar .shortlink-input {
    margin: 0;
    padding: 0;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    background: #2c3338;
    display: none;
    position: absolute;
    float: none;
}
#wpadminbar .ab-top-menu > .menupop > .ab-sub-wrapper {
    min-width: 100%;
}
#wpadminbar .ab-top-secondary .menupop .ab-sub-wrapper {
    right: 0;
    left: auto;
}
#wpadminbar .ab-submenu {
    padding: 6px 0;
}
#wpadminbar .selected .shortlink-input {
    display: block;
}
#wpadminbar .quicklinks .menupop ul li {
    float: none;
}
#wpadminbar .quicklinks .menupop ul li a strong {
    font-weight: 600;
}
#wpadminbar .quicklinks .menupop ul li .ab-item,
#wpadminbar .quicklinks .menupop ul li a strong,
#wpadminbar .quicklinks .menupop.hover ul li .ab-item,
#wpadminbar .shortlink-input,
#wpadminbar.nojs .quicklinks .menupop:hover ul li .ab-item {
    line-height: 2;
    height: 26px;
    white-space: nowrap;
    min-width: 140px;
}
#wpadminbar .shortlink-input {
    width: 200px;
}
#wpadminbar li.hover > .ab-sub-wrapper,
#wpadminbar.nojs li:hover > .ab-sub-wrapper {
    display: block;
}
#wpadminbar .menupop li.hover > .ab-sub-wrapper,
#wpadminbar .menupop li:hover > .ab-sub-wrapper {
    margin-left: 100%;
    margin-top: -32px;
}
#wpadminbar
    .ab-top-secondary
    .menupop
    li.hover
    > .ab-sub-wrapper,
#wpadminbar
    .ab-top-secondary
    .menupop
    li:hover
    > .ab-sub-wrapper {
    margin-left: 0;
    left: inherit;
    right: 100%;
}
#wpadminbar .ab-top-menu > li.hover > .ab-item,
#wpadminbar.nojq .quicklinks .ab-top-menu > li > .ab-item:focus,
#wpadminbar:not(.mobile) .ab-top-menu > li:hover > .ab-item,
#wpadminbar:not(.mobile) .ab-top-menu > li > .ab-item:focus {
    background: #2c3338;
    color: #72aee6;
}
#wpadminbar:not(.mobile) > #wp-toolbar a:focus span.ab-label,
#wpadminbar:not(.mobile) > #wp-toolbar li:hover span.ab-label,
#wpadminbar > #wp-toolbar li.hover span.ab-label {
    color: #72aee6;
}
#wpadminbar .ab-icon,
#wpadminbar .ab-item:before,
#wpadminbar > #wp-toolbar > #wp-admin-bar-root-default .ab-icon,
.wp-admin-bar-arrow {
    position: relative;
    float: left;
    font: normal 20px/1 dashicons;
    speak: never;
    padding: 4px 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: none !important;
    margin-right: 6px;
}
#wpadminbar #adminbarsearch:before,
#wpadminbar .ab-icon:before,
#wpadminbar .ab-item:before {
    color: #a7aaad;
    color: rgba(240, 246, 252, 0.6);
}
#wpadminbar #adminbarsearch:before,
#wpadminbar .ab-icon:before,
#wpadminbar .ab-item:before {
    position: relative;
    transition: all 0.1s ease-in-out;
}
#wpadminbar .ab-label {
    display: inline-block;
    height: 32px;
}
#wpadminbar .ab-submenu .ab-item {
    color: #c3c4c7;
    color: rgba(240, 246, 252, 0.7);
}
#wpadminbar .quicklinks .menupop ul li a,
#wpadminbar .quicklinks .menupop ul li a strong,
#wpadminbar .quicklinks .menupop.hover ul li a,
#wpadminbar.nojs .quicklinks .menupop:hover ul li a {
    color: #c3c4c7;
    color: rgba(240, 246, 252, 0.7);
}
#wpadminbar .quicklinks .ab-sub-wrapper .menupop.hover > a,
#wpadminbar .quicklinks .menupop ul li a:focus,
#wpadminbar .quicklinks .menupop ul li a:focus strong,
#wpadminbar .quicklinks .menupop ul li a:hover,
#wpadminbar .quicklinks .menupop ul li a:hover strong,
#wpadminbar .quicklinks .menupop.hover ul li a:focus,
#wpadminbar .quicklinks .menupop.hover ul li a:hover,
#wpadminbar
    .quicklinks
    .menupop.hover
    ul
    li
    div[tabindex]:focus,
#wpadminbar
    .quicklinks
    .menupop.hover
    ul
    li
    div[tabindex]:hover,
#wpadminbar li #adminbarsearch.adminbar-focused:before,
#wpadminbar li .ab-item:focus .ab-icon:before,
#wpadminbar li .ab-item:focus:before,
#wpadminbar li a:focus .ab-icon:before,
#wpadminbar li.hover .ab-icon:before,
#wpadminbar li.hover .ab-item:before,
#wpadminbar li:hover #adminbarsearch:before,
#wpadminbar li:hover .ab-icon:before,
#wpadminbar li:hover .ab-item:before,
#wpadminbar.nojs .quicklinks .menupop:hover ul li a:focus,
#wpadminbar.nojs .quicklinks .menupop:hover ul li a:hover {
    color: #72aee6;
}
#wpadminbar.mobile .quicklinks .ab-icon:before,
#wpadminbar.mobile .quicklinks .ab-item:before {
    color: #c3c4c7;
}
#wpadminbar.mobile .quicklinks .hover .ab-icon:before,
#wpadminbar.mobile .quicklinks .hover .ab-item:before {
    color: #72aee6;
}
#wpadminbar
    .ab-top-secondary
    .menupop
    .menupop
    > .ab-item:before,
#wpadminbar
    .menupop
    .menupop
    > .ab-item
    .wp-admin-bar-arrow:before {
    position: absolute;
    font: normal 17px/1 dashicons;
    speak: never;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#wpadminbar .menupop .menupop > .ab-item {
    display: block;
    padding-right: 2em;
}
#wpadminbar
    .menupop
    .menupop
    > .ab-item
    .wp-admin-bar-arrow:before {
    top: 1px;
    right: 10px;
    padding: 4px 0;
    content: '\f139';
    color: inherit;
}
#wpadminbar .ab-top-secondary .menupop .menupop > .ab-item {
    padding-left: 2em;
    padding-right: 1em;
}
#wpadminbar
    .ab-top-secondary
    .menupop
    .menupop
    > .ab-item
    .wp-admin-bar-arrow:before {
    top: 1px;
    left: 6px;
    content: '\f141';
}
#wpadminbar .quicklinks .menupop ul.ab-sub-secondary {
    display: block;
    position: relative;
    right: auto;
    margin: 0;
    box-shadow: none;
}
#wpadminbar .quicklinks .menupop ul.ab-sub-secondary,
#wpadminbar
    .quicklinks
    .menupop
    ul.ab-sub-secondary
    .ab-submenu {
    background: #3c434a;
}
#wpadminbar
    .quicklinks
    .menupop
    .ab-sub-secondary
    > li
    .ab-item:focus
    a,
#wpadminbar
    .quicklinks
    .menupop
    .ab-sub-secondary
    > li
    > a:hover {
    color: #72aee6;
}
#wpadminbar .quicklinks a span#ab-updates {
    background: #f0f0f1;
    color: #2c3338;
    display: inline;
    padding: 2px 5px;
    font-size: 10px;
    font-weight: 600;
    border-radius: 10px;
}
#wpadminbar .quicklinks a:hover span#ab-updates {
    background: #fff;
    color: #000;
}
#wpadminbar .ab-top-secondary {
    float: right;
}
#wpadminbar ul li:last-child,
#wpadminbar ul li:last-child .ab-item {
    box-shadow: none;
}
#wpadminbar #wp-admin-bar-recovery-mode {
    color: #fff;
    background-color: #d63638;
}
#wpadminbar
    .ab-top-menu
    > #wp-admin-bar-recovery-mode.hover
    > .ab-item,
#wpadminbar.nojq
    .quicklinks
    .ab-top-menu
    > #wp-admin-bar-recovery-mode
    > .ab-item:focus,
#wpadminbar:not(.mobile)
    .ab-top-menu
    > #wp-admin-bar-recovery-mode:hover
    > .ab-item,
#wpadminbar:not(.mobile)
    .ab-top-menu
    > #wp-admin-bar-recovery-mode
    > .ab-item:focus {
    color: #fff;
    background-color: #d63638;
}
#wp-admin-bar-my-account > ul {
    min-width: 198px;
}
#wp-admin-bar-my-account:not(.with-avatar) > .ab-item {
    display: inline-block;
}
#wp-admin-bar-my-account > .ab-item:before {
    content: '\f110';
    top: 2px;
    float: right;
    margin-left: 6px;
    margin-right: 0;
}
#wp-admin-bar-my-account.with-avatar > .ab-item:before {
    display: none;
    content: none;
}
#wp-admin-bar-my-account.with-avatar > ul {
    min-width: 270px;
}
#wpadminbar #wp-admin-bar-user-actions > li {
    margin-left: 16px;
    margin-right: 16px;
}
#wpadminbar #wp-admin-bar-user-actions.ab-submenu {
    padding: 6px 0 12px;
}
#wpadminbar
    #wp-admin-bar-my-account.with-avatar
    #wp-admin-bar-user-actions
    > li {
    margin-left: 88px;
}
#wpadminbar #wp-admin-bar-user-info {
    margin-top: 6px;
    margin-bottom: 15px;
    height: auto;
    background: 0 0;
}
#wp-admin-bar-user-info .avatar {
    position: absolute;
    left: -72px;
    top: 4px;
    width: 64px;
    height: 64px;
}
#wpadminbar #wp-admin-bar-user-info a {
    background: 0 0;
    height: auto;
}
#wpadminbar #wp-admin-bar-user-info span {
    background: 0 0;
    padding: 0;
    height: 18px;
}
#wpadminbar #wp-admin-bar-user-info .display-name,
#wpadminbar #wp-admin-bar-user-info .username {
    display: block;
}
#wpadminbar #wp-admin-bar-user-info .username {
    color: #a7aaad;
    font-size: 11px;
}
#wpadminbar
    #wp-admin-bar-my-account.with-avatar
    > .ab-empty-item
    img,
#wpadminbar #wp-admin-bar-my-account.with-avatar > a img {
    width: auto;
    height: 16px;
    padding: 0;
    border: 1px solid #8c8f94;
    background: #f0f0f1;
    line-height: 1.84615384;
    vertical-align: middle;
    margin: -4px 0 0 6px;
    float: none;
    display: inline;
}
#wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon {
    width: 15px;
    height: 20px;
    margin-right: 0;
    padding: 6px 0 5px;
}
#wpadminbar #wp-admin-bar-wp-logo > .ab-item {
    padding: 0 7px;
}
#wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon:before {
    content: '\f120';
    top: 2px;
}
#wpadminbar .quicklinks li .blavatar {
    display: inline-block;
    vertical-align: middle;
    font: normal 16px/1 dashicons !important;
    speak: never;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #f0f0f1;
}
#wpadminbar
    .quicklinks
    .ab-sub-wrapper
    .menupop.hover
    > a
    .blavatar,
#wpadminbar .quicklinks li a:focus .blavatar,
#wpadminbar .quicklinks li a:hover .blavatar {
    color: #72aee6;
}
#wpadminbar .quicklinks li div.blavatar:before,
#wpadminbar .quicklinks li img.blavatar {
    height: 16px;
    width: 16px;
    margin: 0 8px 2px -2px;
}
#wpadminbar .quicklinks li div.blavatar:before {
    content: '\f120';
    display: inline-block;
}
#wpadminbar #wp-admin-bar-appearance {
    margin-top: -12px;
}
#wpadminbar #wp-admin-bar-my-sites > .ab-item:before,
#wpadminbar #wp-admin-bar-site-name > .ab-item:before {
    content: '\f541';
    top: 2px;
}
#wpadminbar #wp-admin-bar-customize > .ab-item:before {
    content: '\f540';
    top: 2px;
}
#wpadminbar #wp-admin-bar-edit > .ab-item:before {
    content: '\f464';
    top: 2px;
}
#wpadminbar #wp-admin-bar-site-name > .ab-item:before {
    content: '\f226';
}
.wp-admin
    #wpadminbar
    #wp-admin-bar-site-name
    > .ab-item:before {
    content: '\f102';
}
#wpadminbar #wp-admin-bar-comments .ab-icon {
    margin-right: 6px;
}
#wpadminbar #wp-admin-bar-comments .ab-icon:before {
    content: '\f101';
    top: 3px;
}
#wpadminbar #wp-admin-bar-comments .count-0 {
    opacity: 0.5;
}
#wpadminbar #wp-admin-bar-new-content .ab-icon:before {
    content: '\f132';
    top: 4px;
}
#wpadminbar #wp-admin-bar-updates .ab-icon:before {
    content: '\f463';
    top: 2px;
}
#wpadminbar #wp-admin-bar-updates.spin .ab-icon:before {
    display: inline-block;
    animation: rotation 2s infinite linear;
}
@media (prefers-reduced-motion: reduce) {
    #wpadminbar #wp-admin-bar-updates.spin .ab-icon:before {
        animation: none;
    }
}
#wpadminbar #wp-admin-bar-search .ab-item {
    padding: 0;
    background: 0 0;
}
#wpadminbar #adminbarsearch {
    position: relative;
    height: 32px;
    padding: 0 2px;
    z-index: 1;
}
#wpadminbar #adminbarsearch:before {
    position: absolute;
    top: 6px;
    left: 5px;
    z-index: 20;
    font: normal 20px/1 dashicons !important;
    content: '\f179';
    speak: never;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#wpadminbar
    > #wp-toolbar
    > #wp-admin-bar-top-secondary
    > #wp-admin-bar-search
    #adminbarsearch
    input.adminbar-input {
    display: inline-block;
    float: none;
    position: relative;
    z-index: 30;
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
        sans-serif;
    line-height: 1.84615384;
    text-indent: 0;
    height: 24px;
    width: 24px;
    max-width: none;
    padding: 0 3px 0 24px;
    margin: 0;
    color: #c3c4c7;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    outline: 0;
    cursor: pointer;
    box-shadow: none;
    box-sizing: border-box;
    transition-duration: 0.4s;
    transition-property: width, background;
    transition-timing-function: ease;
}
#wpadminbar
    > #wp-toolbar
    > #wp-admin-bar-top-secondary
    > #wp-admin-bar-search
    #adminbarsearch
    input.adminbar-input:focus {
    z-index: 10;
    color: #000;
    width: 200px;
    background-color: rgba(255, 255, 255, 0.9);
    cursor: text;
    border: 0;
}
#wpadminbar #adminbarsearch .adminbar-button {
    display: none;
}
.customize-support #wpadminbar .hide-if-customize,
.customize-support .hide-if-customize,
.customize-support .wp-core-ui .hide-if-customize,
.customize-support.wp-core-ui .hide-if-customize,
.no-customize-support #wpadminbar .hide-if-no-customize,
.no-customize-support .hide-if-no-customize,
.no-customize-support .wp-core-ui .hide-if-no-customize,
.no-customize-support.wp-core-ui .hide-if-no-customize {
    display: none;
}
#wpadminbar .screen-reader-text,
#wpadminbar .screen-reader-text span {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
}
#wpadminbar .screen-reader-shortcut {
    position: absolute;
    top: -1000em;
}
#wpadminbar .screen-reader-shortcut:focus {
    left: 6px;
    top: 7px;
    height: auto;
    width: auto;
    display: block;
    font-size: 14px;
    font-weight: 600;
    padding: 15px 23px 14px;
    background: #f0f0f1;
    color: #2271b1;
    z-index: 100000;
    line-height: normal;
    text-decoration: none;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
}
@media screen and (max-width: 782px) {
    html #wpadminbar {
        height: 46px;
        min-width: 240px;
    }
    #wpadminbar * {
        font-size: 14px;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            'Helvetica Neue', sans-serif;
        line-height: 2.28571428;
    }
    #wpadminbar .quicklinks .ab-empty-item,
    #wpadminbar .quicklinks > ul > li > a {
        padding: 0;
        height: 46px;
        line-height: 3.28571428;
        width: auto;
    }
    #wpadminbar .ab-icon {
        font: 40px/1 dashicons !important;
        margin: 0;
        padding: 0;
        width: 52px;
        height: 46px;
        text-align: center;
    }
    #wpadminbar .ab-icon:before {
        text-align: center;
    }
    #wpadminbar .ab-submenu {
        padding: 0;
    }
    #wpadminbar #wp-admin-bar-my-account a.ab-item,
    #wpadminbar #wp-admin-bar-my-sites a.ab-item,
    #wpadminbar #wp-admin-bar-site-name a.ab-item {
        text-overflow: clip;
    }
    #wpadminbar .quicklinks .menupop ul li .ab-item,
    #wpadminbar .quicklinks .menupop ul li a strong,
    #wpadminbar .quicklinks .menupop.hover ul li .ab-item,
    #wpadminbar .shortlink-input,
    #wpadminbar.nojs .quicklinks .menupop:hover ul li .ab-item {
        line-height: 1.6;
    }
    #wpadminbar .ab-label {
        display: none;
    }
    #wpadminbar .menupop li.hover > .ab-sub-wrapper,
    #wpadminbar .menupop li:hover > .ab-sub-wrapper {
        margin-top: -46px;
    }
    #wpadminbar
        .ab-top-menu
        .menupop
        .ab-sub-wrapper
        .menupop
        > .ab-item {
        padding-right: 30px;
    }
    #wpadminbar .menupop .menupop > .ab-item:before {
        top: 10px;
        right: 6px;
    }
    #wpadminbar
        .ab-top-menu
        > .menupop
        > .ab-sub-wrapper
        .ab-item {
        font-size: 16px;
        padding: 8px 16px;
    }
    #wpadminbar
        .ab-top-menu
        > .menupop
        > .ab-sub-wrapper
        a:empty {
        display: none;
    }
    #wpadminbar #wp-admin-bar-wp-logo > .ab-item {
        padding: 0;
    }
    #wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon {
        padding: 0;
        width: 52px;
        height: 46px;
        text-align: center;
        vertical-align: top;
    }
    #wpadminbar
        #wp-admin-bar-wp-logo
        > .ab-item
        .ab-icon:before {
        font: 28px/1 dashicons !important;
        top: -3px;
    }
    #wpadminbar .ab-icon,
    #wpadminbar .ab-item:before {
        padding: 0;
    }
    #wpadminbar #wp-admin-bar-customize > .ab-item,
    #wpadminbar #wp-admin-bar-edit > .ab-item,
    #wpadminbar #wp-admin-bar-my-account > .ab-item,
    #wpadminbar #wp-admin-bar-my-sites > .ab-item,
    #wpadminbar #wp-admin-bar-site-name > .ab-item {
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
        width: 52px;
        padding: 0;
        color: #a7aaad;
        position: relative;
    }
    #wpadminbar .ab-icon,
    #wpadminbar .ab-item:before,
    #wpadminbar
        > #wp-toolbar
        > #wp-admin-bar-root-default
        .ab-icon {
        padding: 0;
        margin-right: 0;
    }
    #wpadminbar #wp-admin-bar-customize > .ab-item:before,
    #wpadminbar #wp-admin-bar-edit > .ab-item:before,
    #wpadminbar #wp-admin-bar-my-account > .ab-item:before,
    #wpadminbar #wp-admin-bar-my-sites > .ab-item:before,
    #wpadminbar #wp-admin-bar-site-name > .ab-item:before {
        display: block;
        text-indent: 0;
        font: normal 32px/1 dashicons;
        speak: never;
        top: 7px;
        width: 52px;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    #wpadminbar #wp-admin-bar-appearance {
        margin-top: 0;
    }
    #wpadminbar .quicklinks li .blavatar:before {
        display: none;
    }
    #wpadminbar #wp-admin-bar-search {
        display: none;
    }
    #wpadminbar #wp-admin-bar-new-content .ab-icon:before {
        top: 0;
        line-height: 1.33333333;
        height: 46px !important;
        text-align: center;
        width: 52px;
        display: block;
    }
    #wpadminbar #wp-admin-bar-updates {
        text-align: center;
    }
    #wpadminbar #wp-admin-bar-updates .ab-icon:before {
        top: 3px;
    }
    #wpadminbar #wp-admin-bar-comments .ab-icon {
        margin: 0;
    }
    #wpadminbar #wp-admin-bar-comments .ab-icon:before {
        display: block;
        font-size: 34px;
        height: 46px;
        line-height: 1.38235294;
        top: 0;
    }
    #wpadminbar #wp-admin-bar-my-account > a {
        position: relative;
        white-space: nowrap;
        text-indent: 150%;
        width: 28px;
        padding: 0 10px;
        overflow: hidden;
    }
    #wpadminbar
        .quicklinks
        li#wp-admin-bar-my-account.with-avatar
        > a
        img {
        position: absolute;
        top: 13px;
        right: 10px;
        width: 26px;
        height: 26px;
    }
    #wpadminbar #wp-admin-bar-user-actions.ab-submenu {
        padding: 0;
    }
    #wpadminbar
        #wp-admin-bar-user-actions.ab-submenu
        img.avatar {
        display: none;
    }
    #wpadminbar
        #wp-admin-bar-my-account.with-avatar
        #wp-admin-bar-user-actions
        > li {
        margin: 0;
    }
    #wpadminbar #wp-admin-bar-user-info .display-name {
        height: auto;
        font-size: 16px;
        line-height: 1.5;
        color: #f0f0f1;
    }
    #wpadminbar #wp-admin-bar-user-info a {
        padding-top: 4px;
    }
    #wpadminbar #wp-admin-bar-user-info .username {
        line-height: 0.8 !important;
        margin-bottom: -2px;
    }
    #wp-toolbar > ul > li {
        display: none;
    }
    #wpadminbar li#wp-admin-bar-comments,
    #wpadminbar li#wp-admin-bar-customize,
    #wpadminbar li#wp-admin-bar-edit,
    #wpadminbar li#wp-admin-bar-menu-toggle,
    #wpadminbar li#wp-admin-bar-my-account,
    #wpadminbar li#wp-admin-bar-my-sites,
    #wpadminbar li#wp-admin-bar-new-content,
    #wpadminbar li#wp-admin-bar-site-name,
    #wpadminbar li#wp-admin-bar-updates,
    #wpadminbar li#wp-admin-bar-wp-logo {
        display: block;
    }
    #wpadminbar li.hover ul li,
    #wpadminbar li:hover ul li,
    #wpadminbar li:hover ul li:hover ul li {
        display: list-item;
    }
    #wpadminbar .ab-top-menu > .menupop > .ab-sub-wrapper {
        min-width: -moz-fit-content;
        min-width: fit-content;
    }
    #wpadminbar ul#wp-admin-bar-root-default > li {
        margin-right: 0;
    }
    #wpadminbar #wp-admin-bar-comments,
    #wpadminbar #wp-admin-bar-edit,
    #wpadminbar #wp-admin-bar-my-account,
    #wpadminbar #wp-admin-bar-my-sites,
    #wpadminbar #wp-admin-bar-new-content,
    #wpadminbar #wp-admin-bar-site-name,
    #wpadminbar #wp-admin-bar-updates,
    #wpadminbar #wp-admin-bar-wp-logo,
    #wpadminbar .ab-top-menu,
    #wpadminbar .ab-top-secondary {
        position: static;
    }
    #wpadminbar #wp-admin-bar-my-account {
        float: right;
    }
    .network-admin
        #wpadminbar
        ul#wp-admin-bar-top-secondary
        > li#wp-admin-bar-my-account {
        margin-right: 0;
    }
    #wpadminbar
        .ab-top-secondary
        .menupop
        .menupop
        > .ab-item:before {
        top: 10px;
        left: 0;
    }
}
@media screen and (max-width: 600px) {
    #wpadminbar {
        position: absolute;
    }
    #wp-responsive-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 400;
    }
    #wpadminbar .ab-top-menu > .menupop > .ab-sub-wrapper {
        width: 100%;
        left: 0;
    }
    #wpadminbar .menupop .menupop > .ab-item:before {
        display: none;
    }
    #wpadminbar #wp-admin-bar-wp-logo.menupop .ab-sub-wrapper {
        margin-left: 0;
    }
    #wpadminbar .ab-top-menu > .menupop li > .ab-sub-wrapper {
        margin: 0;
        width: 100%;
        top: auto;
        left: auto;
        position: relative;
    }
    #wpadminbar
        .ab-top-menu
        > .menupop
        li
        > .ab-sub-wrapper
        .ab-item {
        font-size: 16px;
        padding: 6px 15px 19px 30px;
    }
    #wpadminbar li:hover ul li ul li {
        display: list-item;
    }
    #wpadminbar li#wp-admin-bar-updates,
    #wpadminbar li#wp-admin-bar-wp-logo {
        display: none;
    }
    #wpadminbar .ab-top-menu > .menupop li > .ab-sub-wrapper {
        position: static;
        box-shadow: none;
    }
}
@media screen and (max-width: 400px) {
    #wpadminbar li#wp-admin-bar-comments {
        display: none;
    }
}
`;