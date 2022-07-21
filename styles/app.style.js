import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  font-family: "Roboto";
  overflow-x: hidden;
}
html {
  scroll-behavior: smooth;
}
button:focus {
  outline: none;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
img {
  max-width: 100%;
}
.fixed-header {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  transition: 0.7s;
  padding: 25px 0px;
  top: 0px !important;
  box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
}
/* Header Start */
.header {
  position: absolute;
  width: 100%;
  top: 30px;
  margin-bottom: 25px;
  z-index: 999999;
}
.logo img {
  max-width: 200px;
}
.menu {
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .menu-bar ul {
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.menu-bar ul li {
  padding-right: 35px;
}
.menu-bar ul li.btns {
  padding-right: 15px;
}
.menu-bar ul li a {
  color: #000;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
}
.menu-bar ul li a:hover {
  color: #3d80e4;
}

.menu-bar ul li .btn-blue {
  background: linear-gradient(to right, #3d80e4, #0043a7);
  color: #fff;
  padding: 12px 25px;
  border-radius: 5px;
  border: none;
}
.menu-bar ul li .btn-blue-o {
  border: 1px solid #3d80e4;
  color: #000;
  padding: 12px 25px;
  border-radius: 5px;
  background: transparent;
}
.menu-bar ul li .btn-blue:hover {
  background: #000;
  color: #fff;
  transition: 0.4s;
}
.menu-bar ul li .btn-blue-o:hover {
  background: linear-gradient(to right, #3d80e4, #0043a7);
  color: #fff;
  transition: 0.4s;
}
.menu-bar .btn-red:hover {
  background: #000;
  color: #fff;
}
.mob-toggle {
  display: none;
}
/* Header End */

/* Back to Top Start */

#top {
  display: inline-block;
  background-color: #3d80e4;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}
#top::after {
  content: "\f077";
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  font-size: 2em;
  line-height: 50px;
  color: #fff;
}
#top:hover {
  cursor: pointer;
  background-color: #333;
}
#top:active {
  background-color: #555;
}
#top.show {
  opacity: 1;
  visibility: visible;
}

/* Back to Top End */

/* Footer Start */
/* Footer Css Start */
.footerbg {
  padding: 80px 0px 30px 0px;
  background: #f8fafc;
}
.footerbg .content p {
  font-size: 16px;
  color: #000;
  margin-top: 10px;
  line-height: 30px;
  max-width: 300px;
  font-weight: 500;
}
.quik-links h5 {
  color: #000;
  font-size: 22px;
  font-weight: 600;
}
.quik-links ul.links {
  margin-top: 40px;
}
.quik-links ul.links li a {
  display: block;
  color: #000;
  font-size: 18px;
  font-weight: 500;
}
.quik-links ul.links li a:hover {
  text-decoration: none;
  color: #3d80e4;
}
.content h5 {
  color: #000;
  font-size: 22px;
  font-weight: 600;
}
.foot-4 h5 {
  color: #000;
  font-size: 22px;
  font-weight: 600;
}
.subscribe {
  display: flex;
  align-items: center;
  margin-top: 30px;
}
.subscribe .form-control.custom-field {
  border-radius: 50px 0px 0px 50px;
  border: none;
  outline: none;
}
.subscribe button.sends {
  background: #d83f3d;
  height: 58px;
  border: none;
  outline: none;
  width: 95px;
  border-radius: 0 50px 50px 0px;
  font-size: 30px;
  color: #fff;
}
.copyright {
  padding-top: 30px;
  padding-bottom: 30px;
  border-top: rgba(255, 255, 255, 0.2) solid thin;
}
.copyright p {
  color: #000;
  font-style: 16px;
}
.social-links {
  padding: 0px;
}
.social-links img:hover {
  filter: drop-shadow(2px 4px 6px black);
}
.social-media img:hover {
  filter: drop-shadow(2px 4px 6px black);
}
.social-links p {
  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
  margin-left: 10px;
}
.social-links ul {
  margin-top: 40px;
  padding: 0px;
}
.subscribe .form-control.custom-field {
  border-radius: 50px 0px 0px 50px;
  border: none;
  outline: none;
}
.form-control.custom-field {
  height: 58px;
  border-radius: 50px;
}
.social-links ul li {
  list-style: none;
  padding: 5px 0px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.social-links ul li a {
  background: #3d80e4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  margin-right: 8px;
}
.copyright {
  padding: 25px 0px;
  background: linear-gradient(to right, #3d80e4, #0043a7);
}
.copyright h4 {
  color: #fff;
}
.copyright {
  color: #fff;
}
.copyright .social-media ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.copyright .social-media ul li {
  margin-right: 10px;
}
/* Footer Css End */
/* Main Style css end */
.quik-links ul.links li {
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
}
/* Footer End */

`;

export default GlobalStyle;
