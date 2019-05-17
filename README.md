# Launching Large Lists

This project demonstrates different techniques in handling large data sets within a list using [angular] (https://angular.io).

Sometimes developers have to display *thousands of elements* at a time in a table or list.  Adding these many number of items in the **DOM** can cause problems and forces the application to slow down.

## Demo

### Basic

This is loading everything in the DOM.

### Pagination

Paginate your list and show items as chunks it's performant but you can't get the whote snaphot of your list at once and you also have to click back and forth between pages.

### Infinite Scroll

Initially loads only few items and keep appending more items to the list as you scroll, it gives the complete snapshot of the list but as more and more items keep adding, list is going to slow down eventually as the number of nodes in the DOM are increasing and thus application will start slowing down.

### Virtual Scroll

Display only small subset of the data that is in the viewport and keep changing the records as the user scrolls. It keep the number of DOM elements constant hence boosting the performance of the application.

### ag-Grid

[ag-Grid] (https://www.ag-grid.com) is a grid designed to perform smoothly with millions of records.  No specific configuration required.  ag-Grid has Virtual Scroll and Inifinite Scroll.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-vs)

