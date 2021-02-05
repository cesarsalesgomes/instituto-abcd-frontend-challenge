/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Box, Grid, Icon, ListItemIcon,
} from '@material-ui/core';
import menuStyles from './menu.style';
import Icon1 from '../../assets/icons/icon_menu_route_1.svg';
import Icon2 from '../../assets/icons/icon_menu_route_2.svg';
import Icon3 from '../../assets/icons/icon_menu_route_3.svg';
import Icon4 from '../../assets/icons/icon_menu_route_4.svg';
import Icon5 from '../../assets/icons/icon_menu_route_5.svg';

const Menu: React.FC = () => {
  const classes = menuStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Grid container direction="row" justify="center">
          <Box component="div" className={classes.headerImage} />
        </Grid>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Icon>
                <img src={Icon1} height={25} width={25} />
              </Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.menuLabel}
              primary="Perfil dos alunos"
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Icon>
                <img src={Icon2} height={25} width={25} />
              </Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.menuLabel}
              primary="Prova de Português"
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Icon>
                <img src={Icon3} height={25} width={25} />
              </Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.menuLabel}
              primary="Atividades Digitais"
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Icon>
                <img src={Icon4} height={25} width={25} />
              </Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.menuLabel}
              primary="Ajuda"
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Icon>
                <img src={Icon5} height={25} width={25} />
              </Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.menuLabel}
              primary="Configurações"
            />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Menu;
