// ==UserScript==
// @name         Kronos Modern Theme
// @namespace    http://tampermonkey.net/
// @version      1.2.0
// @description  Changes the visual theme of Kronos to a modern look.
// @author       elgustav@
// @match        https://mytime-lite.aka.corp.amazon.com/*
// @icon         data:image/svg+xml;base64,PHN2ZyBpZD0ibG9nb3NhbmR0eXBlc19jb20iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE1MCAxNTAuMiI+PHN0eWxlPi5zdDF7ZmlsbDojZTYzYjI5fTwvc3R5bGU+PGcgaWQ9IkxheWVyXzNfMl8iPjxnIGlkPSJMYXllcl8yXzFfIj48cGF0aCBpZD0iTGF5ZXJfMyIgZD0iTTAgLjJoMTUwdjE1MEgwVi4yeiIgZmlsbD0ibm9uZSIvPjwvZz48L2c+PGcgaWQ9Imtyb25vcyI+PHBhdGggY2xhc3M9InN0MSIgZD0iTTEzLjkgNjIuNWg1Mi43YzEuMiAwIDE1LjEuNyAyMC43LTcuMyA1LjktOCAyMi42LTMxLjUgMjIuNi0zMS41IDEuMi43IDEuMiAxIDIuMSAxLjYgMCAwLTI4IDM5LTI4IDM5LjMtNC45IDYuNi0xMi45IDguMi0xOS4zIDguMkgxM2MwLTMuNC4zLTYuOS45LTEwLjN6TTEzNi4xIDc0LjNjMCAxNS41LTUuNCAyOS45LTE1LjUgNDAuNEw5OCA4My41Yy0yLjEtMi44LTUuOS03LjUtMTItOS4yIDYuMS0xLjkgOS45LTYuNiAxMi05LjJsMjIuNi0zMS41YzEwLjEgMTAuNiAxNS41IDI0LjkgMTUuNSA0MC43eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNy45IDQ5LjZoNDUuMkM3NC45IDQ5LjYgNzcgNDYuMyA4MCA0M2MuMiAwIDE4LjQtMjUuNiAxOC40LTI1LjZzMS4yLjUgMi42IDEuMmMwIDAtMTAuNiAxNS0yNC4zIDMzLjktMi4xIDIuOC02LjEgNy41LTEzLjkgNy41SDE0LjZjMS00IDIuNC03LjYgMy4zLTEwLjR6TTI4IDMzLjhoMjUuNGM0LjUgMCA3LjEtNC4yIDguNy01LjkgMCAuMiAxMS4xLTE1LjMgMTEuMS0xNS4zLTE3LjQuMy0zMy44IDgtNDUuMiAyMS4yeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNS43IDM2LjdoMzQuNmM4LjIuMiAxMy4yLTYuOCAxMy4yLTYuOGwxMS44LTE2LjIgMy4xLjVTNzEgMzguNCA3MC43IDM4LjZjLTMuOCA1LjktNy44IDgtMTIuNyA4LjJIMTkuM2MuNy0xLjkgMy41LTYuNiA2LjQtMTAuMXpNMTMuOSA4NS44aDUyLjdjMS4yIDAgMTUuMS0uNSAyMC43IDcuMyA1LjkgOCAyMi42IDMxLjUgMjIuNiAzMS41IDEuMi0uNyAxLjItLjkgMi4xLTEuNiAwIDAtMjgtMzktMjgtMzkuMy00LjktNi42LTEyLjktOC4yLTE5LjMtOC4ySDEzYzAgMy40LjMgNi45LjkgMTAuM3oiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTcuOSA5OC43aDQ1LjJjMTEuOCAwIDEzLjkgMy4zIDE2LjkgNi42LjIgMCAxOC40IDI1LjYgMTguNCAyNS42czEuMi0uNSAyLjYtMS4yYzAgMC0xMC42LTE1LTI0LjMtMzMuOS0yLjEtMi44LTYuMS03LjUtMTMuOS03LjUgMCAuMi00OC4zIDAtNDguMyAwIDEgNC4xIDIuNCA3LjYgMy40IDEwLjR6TTI4IDExNC41aDI1LjRjNC41IDAgNy4xIDQuMiA4LjcgNS45bDExLjEgMTUuM2MtMTcuNC0uMy0zMy44LTgtNDUuMi0yMS4yeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNS43IDExMS43aDM0LjZjOC4yIDAgMTMuMiA2LjggMTMuMiA2LjhsMTEuOCAxNi4yIDMuMS0uNVM3MSAxMTAgNzAuNyAxMDkuOGMtMy44LTUuOS03LjgtOC0xMi43LTguMkgxOS4zYzEuOCAzLjUgMy45IDYuOSA2LjQgMTAuMXoiLz48L2c+PC9zdmc+
// @grant        none
// @run-at       document-start
// @require      http://code.jquery.com/jquery-3.7.1.min.js
// @downloadURL  https://raw.githubusercontent.com/gmherond/KMT/refs/heads/main/KronosModernThemeScript.js
// ==/UserScript==

/*Changelog 1.2.0 06/23/2025
-Shortened Navbar by hiding button labels by default.
-User can see what each navbar button does by hovering over it.
-Removed code for rowInsert icons.
-Added a new icon for rowInsert buttons using only css.
*/

let new_theme = `
:root{
    color-scheme: dark;
}

html{
    background:none !important;
}

option {
    border-radius: 0.8rem;
    padding: 0.1rem 0.3rem;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 0.4rem;
  background-color:#262626;
  border:2px solid #30303099;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #525252;
  border-radius: 0.4rem;
  transition: background-color 0.5s ease-in-out;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #616162;
}

*{
  font-family: "Inter", serif !important;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  color:white !important;
}

#kronos #header {
    position: sticky !important;
    height: 3rem !important;
    width: 100% !important;
}

#kronos, #kronos.Workspace, #kronos .Workspace{
    margin-top:0rem !important;
    width: auto;
    display: flex !important;
    justify-content: center !important;
    flex-flow: column !important;
    padding: 0;
}

body{
    background: #0b0b0b !important;
    font-family:system-ui !important;
}

.PAGEBODY {
    background: #0b0b0b !important;
}

#kronos table.HeaderBar{
    background: #0b0b0b !important;
    border:none !important;
}

#kronos table.HeaderBar .Context {
    background: #0b0b0b !important;
}

#kronos table.Button td.BR{
    display:none;
}

#kronos table.Button td.BL{
    display:none;
}

#kronos table.Button td.BM, #kronos div.Panel table.Button td.BM, #kronos div.Panel table.ControlLayout table.Button td.BM {
    border:none !important;
    padding: 0.5rem !important;
}

#kronos table.Button td.BM, #kronos div.Panel table.Button td.BM, #kronos div.Panel table.ControlLayout table.Button td.BM a {
    font-size:1rem;
}

#kronos table.Button td {
    margin: 0 !important;
    border: 0 !important;
    padding: 0 !important;
    background: #c83d2b !important;
    border-radius:1rem;
    margin:1rem 0.5rem;
    width:7rem;
    transition: background-color 0.1s;
}

#kronos table.Button td:hover {
    background-color: #a02718 !important;
    text-decoration:none !important;
}

#kronos table.WebPart td.WPContent div.ActionBar {
    border:none;
    background: rgb(18, 18, 18);
    background-size: 100%;
    display:flex;
    justify-content:center;
}

#kronos table.ControlLayout {
    margin-top: 1.5rem;
}

#header img {
    display: none;
}

#header{
    background:rgb(15 15 15) !important;
    border-bottom: 1px solid #c83d2b !important;
}

#header .logo {
    opacity:0;
}

#headertitle{
    font-size:2rem !important;
}

#headercontentdiv{
    margin:0rem 0.5rem;
    display:flex;
    flex-direction:row;
    justify-content:left;
    align-items:center;
}

#kronoslogo{
    width:2.75rem;
    height:2.75rem;
    margin-top:0.2rem;
}

#kronostitle{
    font-size:1rem !important;
    color:white !important;
}

#kronosdiv{
    display:flex;
    justify-content:center;
    align-items:center;
}

#kronos #header div#globalLinks {
    top: 0.375rem !important;
    color: rgb(255 255 255) !important;
    right: 0.75rem !important;
    height: auto !important;
    padding: 0.1rem 0.1rem !important;
    border-radius: 1rem 0rem 0rem 1rem;
    font-size: 0px;
    display: flex !important;
    justify-content: space-around;
}

#kronos div.Timestamp div.LiveClock div span span{
    font-size:0.85rem !important;
    color:white !important;
}

#kronos div.Timestamp div.LiveClock div span span.Time{
    font-size:1rem;
}

#kronos abbr, #kronos h3, #kronos h4, #kronos h5, #kronos, #kronos h6, #kronos p, #kronos span, #kronos sub, #kronos sup, #kronos var, #kronos dl, #kronos dt, #kronos dd, #kronos ol, #kronos ul, #kronos li, #kronos td, #kronos legend, #kronos caption, #kronos select, #kronos option, #kronos input, #kronos button, #kronos textarea {
    color: rgb(0, 0, 0);
    font-family: Inter !important;
    font-size: 0.75rem;

}

#kronos table.Button td.BM a, #kronos table.Button div.Panel td.BM a, #kronos table.Button div.Panel table.ControlLayout td.BM a, #kronos table.Button td.BM a:link, #kronos table.Button td.BM a:visited, #kronos table.Button td.BM a:active {
    color: rgb(255, 255, 255) !important;
    font-family: Inter !important;
    font-size:0.7rem !important;
    text-decoration:none !important;
}

#kronos div.Panel {
    border: 0;
    border-top: 1px solid rgb(255, 255, 255);
    padding: 6px 4px 6px 10px;
    background-color: rgb(18 18 20);
    display: flex;
    justify-content: center;
}

#kronos div.Timestamp div.LiveClock div {
    margin: 10px 0 18px 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

#kronos table.HeaderPanel tr td.Info {
    vertical-align: top;
    display: flex;
    justify-content: center;
}

#kronos h1 {
    text-align:center;
}

#kronos table.WebPart td.WPContent div.ActionBar.first-child {
    padding:0.5rem 0rem;
}

#logo{
    display:none;
}

#mytimelogo{
    position:fixed;
    top:0.5rem;
    left:50%;
    transform: translate(-50%, 0);
}

#kronos table.WebPart td.WPRsRLeft {
    display: none;
}

#kronos table.WebPart td.WPRsRRight, #kronos.Workspace table.WebPart td.WPRsRRight, #kronos .Workspace table.WebPart td.WPRsRRight {
    display: none;
}

#kronos table.WebPart td.WPContent {
    border: none;
    border-top: 1px solid rgb(170, 170, 170);
    border-bottom: 1px solid rgb(170, 170, 170);
}

#kronos #header div#globalLinks a{
    color:#eaeaea !important;
    font-size: 0.75rem !important;
    padding: 0.2rem 0.6rem;
    border-radius: 1rem;
    margin: 0.1rem;
    width: auto !important;
	height:1.5rem;
    display: flex;
    justify-content: center;
    font-weight:600 !important;
    transition: background-color 0.1s;
    align-items:center;
}

.btn{
    font-family: Inter;
    border:none;
    margin: 0 !important;
    border: 0 !important;
    padding: 0.5rem !important;
    background: #c83d2b !important;
    border-radius:1rem;
    margin:1rem 0.5rem;
    width:auto;
    font-size:0.7rem !important;
    height:auto;
    box-shadow:none !important;
    transition: background-color 0.1s ease-in-out;
}

.btn:hover {
    background-color: #b82d1b !important;
}

.navigator-wrapper {
    background: #0b0b0b !important;
}

#kronos .fullScreenLine a, #kronos .fullScreenLine a:hover {
    color: rgb(196 91 91) !important;

}

#kronos #header .globalLinksBlocker {
    display:none;
}

#compLogo{
    display:none;
}

#kronos #moreList.Show, #kronos .basicNav.Show {
    padding-right: 0;
	padding-top:0;
}

#fullScreenLine{
    display:none;
}

#kronos table.ContentPanel th.CPHeader {
    background-color: rgb(33 33 33) !important;
    color: rgb(255 255 255) !important;
    font-family: 'Inter' !important;
    font-size: 0.7rem !important;
}

#kronos table.ColumnarLayout td.Column{
    padding:0 !important;
}

#kronos div.clearFloats {
    display: none;
}

#kronos table.WebPart td.WPContent {
    border-color:rgb(86 86 86) !important;
}

#kronos div.Panel {
    border-color:rgb(86 86 86) !important;
}

#kronos table.ActionList td {
    border-color:rgb(86 86 86) !important;
    background-color: #111111 !important;
}

#kronos #header div#globalLinks a:hover {
    text-decoration: none !important;
    background-color: #ffffff33;
}

#kronos td{
    color:white !important;
}

.Dialog, #kronos.Dialog, #kronos .Dialog {
    background: #0b0b0b !important;
}

#kronos.Dialog table.ControlLayout, #kronos .Dialog table.ControlLayout {
    background: #0b0b0b !important;
}

#kronos.Dialog div.ActionBar, #kronos .Dialog div.ActionBar {
    background: #0b0b0b !important;
}

#kronos.Dialog table.ControlLayout td, #kronos.Dialog table.ControlLayout th, #kronos.Dialog table.ControlLayout td.CLTD, #kronos.Dialog table.ControlLayout th.CLTH {
    border: 1px solid #545454;
    padding:0.1rem !important;
}

#kronos table.HeaderPanel tr td.Info {
    border: none;
}

#kronos table.Tabular tr.Even {
    background-color: rgb(32 32 32) !important;
}
#kronos table.Tabular tr {
    background-color: rgb(24 24 24) !important;
}

#kronos div.Timestamp div.LiveClock div span span.Time{
    color:#c83d2b !important;
}

#kronos table.Tabular th, #kronos td.caldayheader6, #kronos td.calnavicon {
    border-color: rgb(84,84,84) !important;
    background-color: rgb(17 17 17) !important;
}

#kronos table.Tabular tfoot tr.TablePaginator td {
    border-color: rgb(84,84,84) !important;
    background-color: rgb(17 17 17) !important;
}

#kronos table.ControlLayout label, #kronos table.ControlLayout img, #kronos table.ControlLayout input, #kronos table.ControlLayout select, #kronos table.ControlLayout textarea {
    background-color: #0b0b0b !important;
    border-color: rgb(84,84,84) !important;
    overflow-y: auto;
    border-radius: 0.7rem;
    padding: 0.3rem;

}

select:-internal-list-box option:checked {
    background-color: #222 !important;
}

#kronos table.Tabular {
    border-color: rgb(84,84,84) !important;
}

#kronos table.Tabular td {
    border-right: 1px solid rgb(84,84,84) !important;
    padding: 3px 10px 3px 10px;
    text-align: left;
    vertical-align: top;
}

#kronos table.ActionList a, #kronos table.ActionList a:visited, #kronos table.ActionList a:hover, #kronos table.ActionList a:active {
    background:none !important;
}

#kronos img.RowInsertIcon{
	background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='15px' viewBox='0 -960 960 960' width='15px' fill='%23ffffff'%3E%3Cpath d='M216-216v-144 16-4 132Zm-.3 72q-32.7 0-52.2-19.5T144-216v-144q0-33 19.5-52.5T216-432h528q33 0 52.5 19.5T816-360H216v144h396v72H215.7Zm.3-384q-33 0-52.5-19.5T144-600v-144q0-33 19.5-52.5T216-816h528q33 0 52.5 19.5T816-744v144q0 33-19.5 52.5T744-528H216Zm0-72h528v-144H216v144Zm0 0v-144 144ZM744-84v-60h-60v-72h60v-60h72v60h60v72h-60v60h-72Z'/%3E%3C/svg%3E") !important;
}

#kronos h1 {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translate(-50%, 0);
}

.lIcon{
    width:1.2rem;
    height:1.2rem;
    margin-right:0.1rem;
}

#gooselinkdiv{
    position:absolute;
    bottom:0.1rem;
    left:50%;
    transform:translate(-50%,0);
    opacity:80%;
}

#goosecontainer{
    color:gray !important;
    font-size:0.6rem !important;
}

#gooselink{
    color:#c83d2b !important;
}

#kronos table.ControlLayout th, #kronos table.ControlLayout td label, #kronos table.ControlLayout th label, #kronos table.ControlLayout td label a, #kronos table.ControlLayout th label a {
    background: transparent !important;
}

#search-field {
  border: solid 4px #333 !important;
  background: #161616 !important;
  color: white !important;
}

.search-submit-wrapper{
  border: solid 4px #333 !important;
  background: #161616 !important;
  color: white !important;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjhweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyOHB4IiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNNzg0LTEyMCA1MzItMzcycS0zMCAyNC02OSAzOHQtODMgMTRxLTEwOSAwLTE4NC41LTc1LjVUMTIwLTU4MHEwLTEwOSA3NS41LTE4NC41VDM4MC04NDBxMTA5IDAgMTg0LjUgNzUuNVQ2NDAtNTgwcTAgNDQtMTQgODN0LTM4IDY5bDI1MiAyNTItNTYgNTZaTTM4MC00MDBxNzUgMCAxMjcuNS01Mi41VDU2MC01ODBxMC03NS01Mi41LTEyNy41VDM4MC03NjBxLTc1IDAtMTI3LjUgNTIuNVQyMDAtNTgwcTAgNzUgNTIuNSAxMjcuNVQzODAtNDAwWiIvPjwvc3ZnPg==") !important;
  background-repeat: no-repeat !important;
  display:flex;
  justify-content:center;
  align-items:center;
  background-position: center;
}

.hlText{
	scale: 0 0;
    position: absolute;
    background-color: #3f3f3f;
    padding: 0.2rem 0.75rem;
    height: 1rem;
    border-radius: 1rem;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
	text-wrap:nowrap;
	transform: translateY(55%);
	transition: 0.25s transform;
}

a:hover > .hlText{
	scale: 1 1;
	transform: translateX(0%) translateY(99%);
}
`;

let favicon = `
<link rel="shortcut icon" href="data:image/svg+xml;base64,PHN2ZyBpZD0ibG9nb3NhbmR0eXBlc19jb20iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE1MCAxNTAuMiI+PHN0eWxlPi5zdDF7ZmlsbDojZTYzYjI5fTwvc3R5bGU+PGcgaWQ9IkxheWVyXzNfMl8iPjxnIGlkPSJMYXllcl8yXzFfIj48cGF0aCBpZD0iTGF5ZXJfMyIgZD0iTTAgLjJoMTUwdjE1MEgwVi4yeiIgZmlsbD0ibm9uZSIvPjwvZz48L2c+PGcgaWQ9Imtyb25vcyI+PHBhdGggY2xhc3M9InN0MSIgZD0iTTEzLjkgNjIuNWg1Mi43YzEuMiAwIDE1LjEuNyAyMC43LTcuMyA1LjktOCAyMi42LTMxLjUgMjIuNi0zMS41IDEuMi43IDEuMiAxIDIuMSAxLjYgMCAwLTI4IDM5LTI4IDM5LjMtNC45IDYuNi0xMi45IDguMi0xOS4zIDguMkgxM2MwLTMuNC4zLTYuOS45LTEwLjN6TTEzNi4xIDc0LjNjMCAxNS41LTUuNCAyOS45LTE1LjUgNDAuNEw5OCA4My41Yy0yLjEtMi44LTUuOS03LjUtMTItOS4yIDYuMS0xLjkgOS45LTYuNiAxMi05LjJsMjIuNi0zMS41YzEwLjEgMTAuNiAxNS41IDI0LjkgMTUuNSA0MC43eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNy45IDQ5LjZoNDUuMkM3NC45IDQ5LjYgNzcgNDYuMyA4MCA0M2MuMiAwIDE4LjQtMjUuNiAxOC40LTI1LjZzMS4yLjUgMi42IDEuMmMwIDAtMTAuNiAxNS0yNC4zIDMzLjktMi4xIDIuOC02LjEgNy41LTEzLjkgNy41SDE0LjZjMS00IDIuNC03LjYgMy4zLTEwLjR6TTI4IDMzLjhoMjUuNGM0LjUgMCA3LjEtNC4yIDguNy01LjkgMCAuMiAxMS4xLTE1LjMgMTEuMS0xNS4zLTE3LjQuMy0zMy44IDgtNDUuMiAyMS4yeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNS43IDM2LjdoMzQuNmM4LjIuMiAxMy4yLTYuOCAxMy4yLTYuOGwxMS44LTE2LjIgMy4xLjVTNzEgMzguNCA3MC43IDM4LjZjLTMuOCA1LjktNy44IDgtMTIuNyA4LjJIMTkuM2MuNy0xLjkgMy41LTYuNiA2LjQtMTAuMXpNMTMuOSA4NS44aDUyLjdjMS4yIDAgMTUuMS0uNSAyMC43IDcuMyA1LjkgOCAyMi42IDMxLjUgMjIuNiAzMS41IDEuMi0uNyAxLjItLjkgMi4xLTEuNiAwIDAtMjgtMzktMjgtMzkuMy00LjktNi42LTEyLjktOC4yLTE5LjMtOC4ySDEzYzAgMy40LjMgNi45LjkgMTAuM3oiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTcuOSA5OC43aDQ1LjJjMTEuOCAwIDEzLjkgMy4zIDE2LjkgNi42LjIgMCAxOC40IDI1LjYgMTguNCAyNS42czEuMi0uNSAyLjYtMS4yYzAgMC0xMC42LTE1LTI0LjMtMzMuOS0yLjEtMi44LTYuMS03LjUtMTMuOS03LjUgMCAuMi00OC4zIDAtNDguMyAwIDEgNC4xIDIuNCA3LjYgMy40IDEwLjR6TTI4IDExNC41aDI1LjRjNC41IDAgNy4xIDQuMiA4LjcgNS45bDExLjEgMTUuM2MtMTcuNC0uMy0zMy44LTgtNDUuMi0yMS4yeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNS43IDExMS43aDM0LjZjOC4yIDAgMTMuMiA2LjggMTMuMiA2LjhsMTEuOCAxNi4yIDMuMS0uNVM3MSAxMTAgNzAuNyAxMDkuOGMtMy44LTUuOS03LjgtOC0xMi43LTguMkgxOS4zYzEuOCAzLjUgMy45IDYuOSA2LjQgMTAuMXoiLz48L2c+PC9zdmc+" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
`;

let headercontent = `
<div id="kronosdiv">
<svg id="kronoslogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150.2"><style>.st1{fill:#e63b29}</style><g id="Layer_3_2_"><g id="Layer_2_1_"><path id="Layer_3" d="M0 .2h150v150H0V.2z" fill="none"/></g></g><g id="kronos"><path class="st1" d="M13.9 62.5h52.7c1.2 0 15.1.7 20.7-7.3 5.9-8 22.6-31.5 22.6-31.5 1.2.7 1.2 1 2.1 1.6 0 0-28 39-28 39.3-4.9 6.6-12.9 8.2-19.3 8.2H13c0-3.4.3-6.9.9-10.3zM136.1 74.3c0 15.5-5.4 29.9-15.5 40.4L98 83.5c-2.1-2.8-5.9-7.5-12-9.2 6.1-1.9 9.9-6.6 12-9.2l22.6-31.5c10.1 10.6 15.5 24.9 15.5 40.7z"/><path class="st1" d="M17.9 49.6h45.2C74.9 49.6 77 46.3 80 43c.2 0 18.4-25.6 18.4-25.6s1.2.5 2.6 1.2c0 0-10.6 15-24.3 33.9-2.1 2.8-6.1 7.5-13.9 7.5H14.6c1-4 2.4-7.6 3.3-10.4zM28 33.8h25.4c4.5 0 7.1-4.2 8.7-5.9 0 .2 11.1-15.3 11.1-15.3-17.4.3-33.8 8-45.2 21.2z"/><path class="st1" d="M25.7 36.7h34.6c8.2.2 13.2-6.8 13.2-6.8l11.8-16.2 3.1.5S71 38.4 70.7 38.6c-3.8 5.9-7.8 8-12.7 8.2H19.3c.7-1.9 3.5-6.6 6.4-10.1zM13.9 85.8h52.7c1.2 0 15.1-.5 20.7 7.3 5.9 8 22.6 31.5 22.6 31.5 1.2-.7 1.2-.9 2.1-1.6 0 0-28-39-28-39.3-4.9-6.6-12.9-8.2-19.3-8.2H13c0 3.4.3 6.9.9 10.3z"/><path class="st1" d="M17.9 98.7h45.2c11.8 0 13.9 3.3 16.9 6.6.2 0 18.4 25.6 18.4 25.6s1.2-.5 2.6-1.2c0 0-10.6-15-24.3-33.9-2.1-2.8-6.1-7.5-13.9-7.5 0 .2-48.3 0-48.3 0 1 4.1 2.4 7.6 3.4 10.4zM28 114.5h25.4c4.5 0 7.1 4.2 8.7 5.9l11.1 15.3c-17.4-.3-33.8-8-45.2-21.2z"/><path class="st1" d="M25.7 111.7h34.6c8.2 0 13.2 6.8 13.2 6.8l11.8 16.2 3.1-.5S71 110 70.7 109.8c-3.8-5.9-7.8-8-12.7-8.2H19.3c1.8 3.5 3.9 6.9 6.4 10.1z"/></g></svg>
<span id="kronostitle">Kronos Workforce Central®</span></div>
<svg id="mytimelogo" width="124" height="34" viewBox="0 0 124 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.24 26V8.684H1.788L2.004 11.312H2.076C2.844 10.448 3.696 9.728 4.632 9.152C5.592 8.552 6.564 8.252 7.548 8.252C8.916 8.252 9.972 8.576 10.716 9.224C11.46 9.848 12 10.688 12.336 11.744C13.296 10.664 14.256 9.812 15.216 9.188C16.176 8.564 17.16 8.252 18.168 8.252C19.92 8.252 21.216 8.804 22.056 9.908C22.92 11.012 23.352 12.68 23.352 14.912V26H21.516V15.164C21.516 13.364 21.216 12.032 20.616 11.168C20.016 10.304 19.068 9.872 17.772 9.872C16.98 9.872 16.176 10.136 15.36 10.664C14.544 11.192 13.668 11.984 12.732 13.04V26H10.896V15.164C10.896 13.364 10.584 12.032 9.96 11.168C9.36 10.304 8.412 9.872 7.116 9.872C5.628 9.872 3.96 10.928 2.112 13.04V26H0.24ZM29.0915 33.812C28.7555 33.812 28.4315 33.776 28.1195 33.704C27.8075 33.632 27.5195 33.548 27.2555 33.452L27.6875 31.904C27.8795 31.952 28.0955 32 28.3355 32.048C28.5995 32.12 28.8515 32.156 29.0915 32.156C30.1235 32.156 30.9995 31.736 31.7195 30.896C32.4395 30.056 33.0035 29 33.4115 27.728L33.8795 26.252L26.7875 8.684H28.7675L32.7995 19.304C33.0875 20.048 33.3875 20.852 33.6995 21.716C34.0355 22.58 34.3595 23.408 34.6715 24.2H34.8155C35.0795 23.408 35.3435 22.58 35.6075 21.716C35.8955 20.852 36.1595 20.048 36.3995 19.304L39.9635 8.684H41.8355L35.0315 28.052C34.6955 29.036 34.2635 29.96 33.7355 30.824C33.2315 31.712 32.5955 32.432 31.8275 32.984C31.0595 33.536 30.1475 33.812 29.0915 33.812Z" fill="white"/>
<path d="M54.108 26.432C51.948 26.432 50.4 25.808 49.464 24.56C48.552 23.312 48.096 21.68 48.096 19.664V12.068H45.648V8.396L48.384 8.18L48.96 3.428H53.028V8.18H57.384V12.068H53.028V19.628C53.028 20.636 53.232 21.38 53.64 21.86C54.072 22.316 54.66 22.544 55.404 22.544C55.716 22.544 56.028 22.508 56.34 22.436C56.652 22.364 56.928 22.28 57.168 22.184L57.96 25.784C57.48 25.928 56.916 26.072 56.268 26.216C55.62 26.36 54.9 26.432 54.108 26.432ZM60.9472 26V8.18H65.8792V26H60.9472ZM63.4312 5.444C62.6392 5.444 61.9792 5.192 61.4512 4.688C60.9232 4.184 60.6592 3.548 60.6592 2.78C60.6592 2.012 60.9232 1.388 61.4512 0.907999C61.9792 0.403998 62.6392 0.151998 63.4312 0.151998C64.2472 0.151998 64.9072 0.403998 65.4112 0.907999C65.9392 1.388 66.2032 2.012 66.2032 2.78C66.2032 3.548 65.9392 4.184 65.4112 4.688C64.9072 5.192 64.2472 5.444 63.4312 5.444ZM70.7558 26V8.18H74.7878L75.1478 10.52H75.2918C76.0118 9.776 76.8038 9.128 77.6678 8.576C78.5318 8.024 79.5398 7.748 80.6918 7.748C81.9638 7.748 82.9958 8.024 83.7878 8.576C84.5798 9.104 85.1918 9.848 85.6238 10.808C86.4158 9.968 87.2558 9.248 88.1438 8.648C89.0558 8.048 90.0878 7.748 91.2398 7.748C93.1598 7.748 94.5638 8.384 95.4518 9.656C96.3398 10.928 96.7838 12.68 96.7838 14.912V26H91.8518V15.56C91.8518 14.216 91.6598 13.28 91.2758 12.752C90.9158 12.224 90.3278 11.96 89.5117 11.96C89.0078 11.96 88.4918 12.116 87.9638 12.428C87.4358 12.74 86.8598 13.22 86.2358 13.868V26H81.3038V15.56C81.3038 14.216 81.1118 13.28 80.7278 12.752C80.3678 12.224 79.7798 11.96 78.9638 11.96C77.9798 11.96 76.8878 12.596 75.6878 13.868V26H70.7558ZM109.331 26.432C107.651 26.432 106.127 26.06 104.759 25.316C103.415 24.572 102.347 23.516 101.555 22.148C100.763 20.756 100.367 19.076 100.367 17.108C100.367 15.188 100.763 13.532 101.555 12.14C102.371 10.748 103.415 9.668 104.687 8.9C105.959 8.132 107.303 7.748 108.719 7.748C110.375 7.748 111.755 8.12 112.859 8.864C113.987 9.608 114.827 10.628 115.379 11.924C115.955 13.196 116.243 14.648 116.243 16.28C116.243 16.712 116.219 17.144 116.171 17.576C116.123 17.984 116.075 18.296 116.027 18.512H104.255L104.219 15.236H111.995C111.995 14.132 111.743 13.244 111.239 12.572C110.735 11.876 109.931 11.528 108.827 11.528C108.179 11.528 107.555 11.708 106.955 12.068C106.355 12.428 105.863 13.028 105.479 13.868C105.095 14.684 104.903 15.764 104.903 17.108C104.903 18.476 105.143 19.568 105.623 20.384C106.127 21.176 106.763 21.752 107.531 22.112C108.299 22.472 109.115 22.652 109.979 22.652C110.699 22.652 111.371 22.556 111.995 22.364C112.643 22.148 113.291 21.848 113.939 21.464L115.559 24.452C114.671 25.052 113.675 25.532 112.571 25.892C111.491 26.252 110.411 26.432 109.331 26.432Z" fill="white"/>
<path d="M111 2.5C111 3.88071 109.881 5 108.5 5C107.119 5 106 3.88071 106 2.5C106 1.11929 107.119 0 108.5 0C109.881 0 111 1.11929 111 2.5Z" fill="#DA4F21"/>
<circle cx="121.5" cy="17.5" r="2.5" fill="#DA4F21"/>
<circle cx="116.5" cy="4.5" r="1.5" fill="#DA4F21"/>
<circle cx="120.5" cy="9.5" r="1.5" fill="#DA4F21"/>
</svg>
`;

let hideshowbtn= `
<svg id="hideshowbutton" width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="132" height="132" rx="35" transform="matrix(1 0 0 -1 0 132)" fill="#C83D2B"/>
<path d="M66.5 102L105.904 75H27.0958L66.5 102Z" fill="black"/>
<path d="M66.5 30L105.904 57H27.0958L66.5 30Z" fill="black"/>
</svg>
`;

let links = `
<span id="returnHome" onclick="returnHome()" class="basicNav Show">
    <a href="/wfc/applications/mss/managerlaunch.do" onclick="return false;">
    <svg class="lIcon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eaeaea"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg>
        <span class="hlText">Home</span>
    </a>
</span>

<a target="contentPane" href="/wfc/applications/wtk/html/ess/timestamp.jsp"><svg class="lIcon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eaeaea"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h40v-200h480v200h40q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm120-640h320v-120H320v120ZM200-160h560v-480H200v480Zm280-40q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-60q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm46-66 28-28-54-54v-92h-40v108l66 66Zm-46-74Z"/></svg><span class="hlText">Timestamp</span></a>
<a target="contentPane" href="/wfc/applications/mss/html/portal-launch.jsp?url=-1511714176&from=home"><svg class="lIcon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eaeaea"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg><span class="hlText">Timecard</span></a>
<a target="contentPane" href="/wfc/applications/wtk/html/ess/my-reports.jsp"><svg class="lIcon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eaeaea"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v333q-19-11-39-20t-41-16v-137H520v137q-46 14-86 40t-74 63H200v160h82q11 22 22 42t24 38H200Zm0-320h240v-160H200v160Zm0-240h560v-80H200v80Zm280 200Zm0 0Zm0 0Zm0 0ZM640-40q-91 0-168-48T360-220q35-84 112-132t168-48q91 0 168 48t112 132q-35 84-112 132T640-40Zm0-80q57 0 107.5-26t82.5-74q-32-48-82.5-74T640-320q-57 0-107.5 26T450-220q32 48 82.5 74T640-120Zm0-40q-25 0-42.5-17.5T580-220q0-25 17.5-42.5T640-280q25 0 42.5 17.5T700-220q0 25-17.5 42.5T640-160Z"/></svg><span class="hlText">Reports</span></a>
<a onclick="launchHelp(&quot;/wfcstatic/help/en/wwhelp.htm&quot;); return false;" href="/wfcstatic/help/en/wwhelp.htm"><svg class="lIcon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eaeaea"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><span class="hlText">Help</span></a>
<a href="/wfc/applications/wtk/html/ess/logoff.jsp" title="" target="_top" onclick="return checkUSD()"><svg class="lIcon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eaeaea"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg><span class="hlText">Log Off</span></a>
`;

let gooselink = `
<span id="goosecontainer">Theme made by <a id="gooselink" target="_blank" href="https://phonetool.amazon.com/users/elgustav">@elgustav</a> 🪿</span>
`;

let script = `
function goToTimestamp{
    document.getElementById("contentPane").src = "https://mytime-lite.aka.corp.amazon.com/wfc/applications/wtk/html/ess/timestamp.jsp";
}

function goToTimecard{
    document.getElementById("contentPane").src = "https://mytime-lite.aka.corp.amazon.com/wfc/applications/mss/html/portal-launch.jsp?url=-1511714176&from=home";
}

function goToReports{
    document.getElementById("contentPane").src = "https://mytime-lite.aka.corp.amazon.com/wfc/applications/wtk/html/ess/my-reports.jsp";
}
`;

let style = document.createElement('style');
let headercontentdiv = document.createElement('div');
headercontentdiv.id = "headercontentdiv";
let hideshowbuttondiv = document.createElement("div");

let scriptElement = document.createElement("script");
scriptElement.innerHTML = script;

let gooselinkdiv = document.createElement("div");
gooselinkdiv.innerHTML = gooselink;
gooselinkdiv.id="gooselinkdiv";

headercontentdiv.innerHTML = headercontent;
document.head.innerHTML+=favicon;
style.innerHTML+=new_theme;
document.head.append(style);
document.head.append(scriptElement);

const inIframe = window.self !== window.top;

console.log(inIframe);

if(inIframe==false){
    let redirect = false;
    if(location.href!="https://mytime-lite.aka.corp.amazon.com/wfc/applications/suitenav/navigation.do?ESS=true?redirect=/wfc/applications/wtk/html/ess/timestamp.jsp"){
        if(!location.href.startsWith("https://mytime-lite.aka.corp.amazon.com/wfcstatic/help")){
            redirect=true;
        }
    }
    if(redirect){
        location.href="https://mytime-lite.aka.corp.amazon.com";
    }
}
else{
    if(location.href=="https://mytime-lite.aka.corp.amazon.com/wfc/applications/wpk/html/kronos-logonbody.jsp?ESS=true&url=-1511714176&from=home"){
        localStorage.setItem("redirectTimestamp",true);
        //document.body.innerHTML = "<span>If you are seeing this, click <a style='color:#c83d2b !important' href='https://mytime-lite.aka.corp.amazon.com/wfc/applications/mss/managerlaunch.do'>here</a> to go Home.</span>";
        location.href="https://mytime-lite.aka.corp.amazon.com/wfc/applications/mss/managerlaunch.do";

    }

    if(location.href=="https://mytime-lite.aka.corp.amazon.com/wfc/applications/mss/managerlaunch.do"){
        if(localStorage.getItem("redirectTimestamp")=="true"){
            localStorage.setItem("redirectTimestamp",false);
            location.href="https://mytime-lite.aka.corp.amazon.com/wfc/applications/mss/html/portal-launch.jsp?url=-1511714176&from=home";
        }
    }
}

$( document ).ready(function() {
    document.getElementById("contentDiv").style="margin: 0px; padding: 0px; border: 0px; visibility: visible;";
    if(location.href=="https://mytime-lite.aka.corp.amazon.com/wfc/applications/wpk/html/kronos-logonbody.jsp?ESS=true&url=-1511714176&from=home"){
        document.body.innerHTML = "<span>If you are seeing this, click <a style='color:#c83d2b !important' href='https://mytime-lite.aka.corp.amazon.com/wfc/applications/mss/managerlaunch.do'>here</a> to go Home.</span>";
    }
    if(document.getElementById("header")){
        let header = document.getElementById("header");
        header.prepend(headercontentdiv);
        let globalLinks = document.getElementById("globalLinks");
        globalLinks.innerHTML = links;
        document.body.append(gooselinkdiv);
    }
});
