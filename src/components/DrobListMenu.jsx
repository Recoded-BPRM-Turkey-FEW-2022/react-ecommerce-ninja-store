import React, { Component } from 'react'
import {
    Typography,
    TextField,
    Grid,
    Container,
    CssBaseline,
    CardContent,
    CardMedia,
    Card,
    CardActions,
    AppBar,
    Toolbar,
    Button,
  } from "@mui/material";

function DrobListMenu() {

    return (
        <>
        <Typography variant="h5" underline>More Info</Typography>
        <Card paragraph className="dropDownParagraph">
          here Info About the Company , Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Rem optio magni doloribus aliquam
          soluta nam voluptatem sed animi labore quae iure quam velit
          eaque veritatis nostrum nulla laboriosam, sint laudantium porro
          ut. Velit minus tenetur porro cupiditate sequi commodi adipisci!
        </Card>

        <ul className='ul'>
          <li >
            <a href="#">Description</a>
          </li>
          <li>
            <a href="#">Details</a>
          </li>
          <li>
            <a href="#">Video</a>
          </li>
          <li>
            <a href="#">Write Overview</a>
          </li>
        </ul>
        <Card paragraph className="dropDownParagraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          dolor suscipit culpa recusandae, quis laboriosam illo quisquam
          consequuntur eligendi veniam nesciunt molestias explicabo. Id
          aperiam hic sunt iusto illo maiores? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Architecto necessitatibus
          provident vitae eligendi est a alias sed nostrum perspiciatis
          saepe quia velit, nihil aliquid voluptatum consequuntur tenetur
          minus ea excepturi.
        </Card>
        </>
    )

}
export default DrobListMenu
