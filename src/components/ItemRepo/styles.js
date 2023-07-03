import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }
    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }
    /* estilizando botão ver repositorio */
    a.ver-repositorio-link {
    box-shadow:inset 0px 1px 3px 0px #91b8b3;
	background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	background-color:#768d87;
	border-radius:5px;
	border:1px solid #566963;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:11px 23px;
	text-decoration:none;
	text-shadow:0px -1px 0px #2b665e;
    }
    a.ver-repositorio-link:hover {
        background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
        background-color:#6c7c7c;

    }
    a.ver-repositorio-link:active {
        position:relative;
        top:1px;
    }
    
    /* estilizando botão remover */
    button.remover{
    box-shadow:inset 0px 1px 3px 0px #91b8b3;
	background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	background-color:#768d87;
	border-radius:5px;
	border:1px solid #566963;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:11px 23px;
	text-decoration:none;
	text-shadow:0px -1px 0px #2b665e;
    }
    button.remover:hover {
        background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
        background-color:#6c7c7c;
    }
    button.remover:active {
        position:relative;
        top:1px;
    }
    
    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`