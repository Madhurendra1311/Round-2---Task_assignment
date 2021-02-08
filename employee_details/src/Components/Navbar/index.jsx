import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     height: "100px"
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

const links = [
  {
    to: "/",
    title: "Dashboard"
  },
  {
    to: "/allEmployee",
    title: "EmployeeDetails"
  }
];

function NavBar() {
  // const classes = useStyles();
  return (
    <>
      <div style={{ backgroundColor: "#000", height: "50px" }}>
        {links.map(({ to, title }) => (
          <Link key={to} style={{ padding: 250, textAlign: "center", color: "white", textDecoration: "none" }} to={to}>
            {title}
          </Link>
        ))}
      </div>

      {/* <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          {links.map(({ to, title }) => (
          <Link key={to} style={{ padding: 250, textAlign: "center", color:"white", textDecoration: "none" }} to={to}>
            {title}
          </Link>
        ))}<br/>
          </Typography>
        </Toolbar>
      </AppBar>
    </div> */}
    </>
  )
}

export default NavBar