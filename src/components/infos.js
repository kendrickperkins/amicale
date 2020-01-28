import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Moment from 'react-moment';
import '../../node_modules/moment/locale/fr'
import moment from 'moment'

const Inf = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin-bottom:1em;
    p {
      margin:0;
    }
    text-transform: uppercase;
    font-weight:300;
    color:black;
    .cats{
      font-size:70%;
    }
`

const Infos=(props)=>{
  const rootPath = `${__PATH_PREFIX__}/`
  let date=[];
  let affDate, affHeure;
  const dateActuelle=new Date();
  let vieux=false;
  let annee=null;

  if(props.date && new Date(props.date).getUTCFullYear()<dateActuelle.getUTCFullYear()) {
    annee=(<Moment locale='fr' format="YYYY">{props.date}</Moment>);
  }


  if(props.date && moment(props.date).isBefore(moment(dateActuelle))) vieux=true;
  if(props.date && props.location.pathname === rootPath) {
    //date=props.date.toLocaleDateString('fr-FR', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'numeric', minute:'numeric', timeZone: "Europe/Paris"}).split(' ')
    affDate=<Moment locale='fr' format="ddd D MMM">{props.date}</Moment>
    affHeure=<Moment locale='fr' format="H:mm">{props.date}</Moment>

  }
  if(props.date && props.location.pathname !== rootPath) {
    //date=props.date.toLocaleDateString('fr-FR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric', timeZone: "Europe/Paris"}).split(' ')
    affDate=<div>{moment(props.date).locale('fr').format('dddd D MMMM')}</div>;
    affHeure=<div>{moment(props.date).locale('fr').format('H:mm')}</div>
  }

  return (
    <Inf>
        {affDate}
        {annee}
        –
        {affHeure}
        <p className="cats">{props.cats && props.cats.map(tag=>(tag.name+' '))}</p>
    </Inf>
)}

export default Infos;