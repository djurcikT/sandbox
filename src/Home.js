import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { Header } from "./Header";
import { Card } from "primereact/card";
import { Route, Routes } from "react-router-dom";

export function Home(props) {
  return (
    <div className="HomeContainer">
      <Header headerLabel={"Home"} headerSize={1}></Header>

      <div className="HomeText">
        <Card title="O Sajtu">
          <p className="m-0">
            Ovo je sajt koji sam napravila na strucnoj praksi. Sadrzi glavnu
            Main stranicu sa navigacijom iz koje se moze ici u razlicite delove
            sajta: Home, User Management i Product Management. <br></br>
            Ovo je Home stranica koja objasnjava svaku stranicu i cemu ona
            sluzi. <br></br>
            User Management stranica se sastoji od forme koju korisnik
            ispunjava, a zatim se ti njegovi podaci smestaju u tabelu, iz koje
            kasnije moze da ih izmeni ili obrise <br></br>
            Product Management stranica se sastoji od forme u koju se upisuju
            podaci o proizvodu, a zatim se ti njegovi podaci smestaju u tabelu,
            iz koje kasnije moze da ih izmeni ili obrise
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            impedit illo nihil voluptate porro voluptates eligendi eveniet quam
            facere ut? Alias eveniet iste quod tenetur vel quae voluptates
            laboriosam maxime! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatem error vel placeat iusto? Numquam
            recusandae, fugit obcaecati dignissimos, aliquid odio officiis
            ducimus, excepturi impedit assumenda ipsum placeat. Ducimus, cumque
            iure! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolores, voluptatum ea atque, repellendus amet itaque libero error
            dolorem minus odio minima iure esse illo at quibusdam nisi laborum
            pariatur facilis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Inventore itaque quo, aut libero ratione error
            reprehenderit reiciendis eos eum harum dolore repudiandae impedit
            possimus temporibus. Ipsam quia doloremque odio natus! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam ad est
            corporis consequuntur atque voluptatibus laboriosam. Consectetur
            alias laboriosam veniam ut magni quaerat, cumque accusamus voluptas
            distinctio ea cum culpa?
          </p>
        </Card>
      </div>
    </div>
  );
}
