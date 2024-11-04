import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { Card } from "primereact/card";
import { useTranslation, Trans } from "react-i18next";



export function Home(props) {
  const { t } = useTranslation();
  return (
    <div className="HomeContainer">
      <h2 className="flex justify-content-center">{t("title_h")}</h2>

      <div className="HomeText shadow-6">
        <Card title={t("title_h_card")}>
          <p className="m-0">
            <Trans i18nKey="introduction"></Trans>
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
