/*
FALTA
-BOTON DELETE POKEMON
-Editar también
*/

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  deletePokemonById,
  getPokemonById,
  modifyName,
} from "@/api/pokemonFetch";
import DetailsComponent from "@/Components/DetailsComponent";
import { useRouter } from "next/router";

export default function pokeDetails() {
  let router = useRouter();
  let { idImported } = router.query;
  const [information, setInformation] = useState({}); //información del
  const [newPokeName, setNewPokeName] = useState("");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let infoAux = getPokemonById(idImported); //Para sacar la información del pokemon
    setInformation(infoAux);
  }, []);

  const renamehandler = (e) => {
    setNewPokeName(e.target.value);
  };
  const deleteAndBack = (id) => {
    deletePokemonById(id);
    router.back();
  };
  const changeHidden = () => {
    const hiddenAux = hidden;
    setHidden(!hiddenAux);
  };

  return (
    <>
      <div>
        <h1>pokeDetails</h1>
        <div hidden={!hidden}>
          <input value={newPokeName} onChange={renamehandler} />
          <button
            onClick={() => {
              modifyName(idImported, newPokeName);
            }}
          >
            Change name
          </button>
        </div>
        <div hidden={hidden}>
          <DetailsComponent
            id={information.id}
            name={information.name}
            url={information.url}
          />
        </div>
        <div>
          <button
            onClick={() => {
              deleteAndBack(idImported);
            }}
          >
            Delete Pokemon
          </button>
        </div>
        <div>
          <button onClick={changeHidden} hidden={hidden}>
            Edit Pokemon
          </button>
          <button onClick={changeHidden} hidden={!hidden}>
            Exit
          </button>
        </div>
        <div>
          <Link href={"/"}>Home</Link>
        </div>
      </div>
    </>
  );
}
