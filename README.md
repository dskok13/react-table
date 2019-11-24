# Reactable - React Table Demo

React-Table demo application.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing and running
After cloning this repository, 
`yarn install`

and then

`yarn start`

## Notes and Observations about  React Table (7.3)

* Column widths
Default will be equal size columns
Specific width can be specified in pixels in the columns array.  Percentage widths and screen units not supported.
Good stuff - end user can resize columns by adjusting header widths.

* Alignment
Default is centered headers and left justified cells.
Alignment (and more formatting) can be specified for a specific column in the columns array by defining Header and Cell properties.

* Styling
Default uses box shadow on bottom of header to help separate header from table content.  Nice look but it might be inconsistent with the rest of a website.

* Sorting
Default behavior is that columns are sortable just be clicking the column header.  Visual feeback is that the column header border (top/bottom) is highlighted depending upon if sort is asc/desc.
Other features not tried yet: default sorting (for when table is initially loaded), custom sort methods, multi-column sort.

