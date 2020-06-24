import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Calc from './pages/Calc'
import Brows from './pages/Brows'
import Map from './pages/Map'

const menuNavegacao = createDrawerNavigator(
    {
        Calculadora: Calc,
        Navegador: Brows,
        Mapa: Map,
    }
)

const rotasPrincipais = {
    Calc: {
        name: 'Calc',
        screen: menuNavegacao
    },
    Brows: {
        name: 'Brows',
        screen: Brows
    },
    Map: {
        name:'Map',
        screen: Map
    }
}

const Navigator = createSwitchNavigator(rotasPrincipais, {
    initialRouteName: 'Calc'
})


const Routes = createAppContainer(Navigator)


export default Routes;

