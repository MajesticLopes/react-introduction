// IMPORTER LES OUTILS REACT
import ReactDOM from "react-dom";
// IMPORTER NOTRE PREMIER COMPOSANT: APP
import { App } from "./App";
// CIBLER LA DIV DONT L'ID EST ROOT
const divRoot = document.getElementById("root");

// CREER UN NOEUD RACINE REACT A PARTIR DE LA DIV ROOT
const reactRoot = ReactDOM.createRoot(divRoot);
// INJECTER NOTRE PREMIER COMPOSANT LE NOEUD RACINE
reactRoot.render(<App></App>);
