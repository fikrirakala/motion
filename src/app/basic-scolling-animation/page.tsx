"use client";

import { motion } from "framer-motion";

import FadeLeft from "./fade-left";
import FadeRight from "./fade-right";

export default function BasicScrollingAnimationPage() {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-10 px-8 py-20">
      <motion.h1
        className="text-center text-5xl font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Just Keep Scrolling
      </motion.h1>

      <FadeLeft>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          nostrum. Odit rerum et molestiae quis exercitationem saepe reiciendis.
          Repellat ut dolorem dolorum unde, adipisci asperiores repudiandae
          consequatur consectetur dolores quod ipsam, praesentium eligendi neque
          dignissimos accusantium cum quia atque voluptas provident perferendis
          reprehenderit facilis nobis quis! Aut atque iusto illum dolores eius
          expedita ratione velit magnam voluptatem nesciunt sunt ut ex, non
          praesentium inventore mollitia voluptate? Nemo id, pariatur quasi ut
          sed enim quaerat saepe earum accusantium optio assumenda illum minus
          incidunt dignissimos at ad blanditiis natus dolorem iste harum
          nostrum. Soluta id maiores quisquam, eius sequi facilis fuga nihil?
        </p>
      </FadeLeft>

      <FadeRight>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quos
          in, ullam perspiciatis temporibus illo perferendis reprehenderit vitae
          animi reiciendis, aliquid fugit ea voluptatibus non? Excepturi vel
          enim dicta sapiente, cumque, quod accusamus itaque esse rerum nisi
          ducimus dolorum optio soluta cupiditate quasi aut architecto quam
          maiores illum ea culpa! Quas tempore ea dignissimos ipsa facere minus
          beatae autem similique hic! Voluptas excepturi repellendus sunt, optio
          dolores ratione exercitationem quae, et suscipit nemo, iure nostrum ex
          voluptatem possimus ipsa provident animi. Molestiae voluptatem
          recusandae, architecto vel eos praesentium totam animi eaque eligendi,
          nisi soluta fugit quis? Cumque placeat impedit numquam!
        </p>
      </FadeRight>

      <FadeLeft>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          commodi, quis nemo, iure repudiandae numquam ex laborum necessitatibus
          consectetur sapiente voluptate id qui earum fugiat sed? In enim
          reprehenderit, repellendus autem non cupiditate modi incidunt omnis
          saepe? Fuga in aliquam assumenda, sed deleniti vero nesciunt
          reiciendis nam quod dignissimos architecto. Consequatur, beatae
          temporibus delectus dolor ex cumque hic eum, tempore nemo aperiam ab
          voluptatum. Est laboriosam aliquid id consequatur. Sapiente obcaecati
          atque adipisci totam minus porro eos odit dolorum harum? Iure dolorem
          laudantium reprehenderit doloribus minima asperiores laboriosam,
          veniam fugiat architecto maxime tenetur. Unde expedita eaque officia
          blanditiis voluptas animi.
        </p>
      </FadeLeft>

      <FadeRight>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          dolor itaque vitae, sapiente perspiciatis rem doloremque velit, labore
          minus officia corrupti dolorum! Vero nulla ad nemo voluptatem id.
          Obcaecati id reprehenderit dicta enim? Ipsa alias nam maiores sapiente
          modi omnis maxime veritatis voluptates autem nemo dicta commodi iste,
          eos nobis inventore eveniet vero praesentium fugit vel ab! Debitis
          perspiciatis consectetur quaerat minima nulla quidem dicta fugit,
          corporis quisquam magni, sed tempora. Nulla repudiandae assumenda odit
          quas voluptates architecto necessitatibus iusto ut doloremque.
          Consectetur fugiat, repudiandae enim doloremque, dolorem numquam
          laborum quos dolor, modi autem labore. Optio nesciunt labore
          blanditiis corrupti!
        </p>
      </FadeRight>

      <FadeLeft>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          commodi, quis nemo, iure repudiandae numquam ex laborum necessitatibus
          consectetur sapiente voluptate id qui earum fugiat sed? In enim
          reprehenderit, repellendus autem non cupiditate modi incidunt omnis
          saepe? Fuga in aliquam assumenda, sed deleniti vero nesciunt
          reiciendis nam quod dignissimos architecto. Consequatur, beatae
          temporibus delectus dolor ex cumque hic eum, tempore nemo aperiam ab
          voluptatum. Est laboriosam aliquid id consequatur. Sapiente obcaecati
          atque adipisci totam minus porro eos odit dolorum harum? Iure dolorem
          laudantium reprehenderit doloribus minima asperiores laboriosam,
          veniam fugiat architecto maxime tenetur. Unde expedita eaque officia
          blanditiis voluptas animi.
        </p>
      </FadeLeft>

      <FadeRight>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          dolor itaque vitae, sapiente perspiciatis rem doloremque velit, labore
          minus officia corrupti dolorum! Vero nulla ad nemo voluptatem id.
          Obcaecati id reprehenderit dicta enim? Ipsa alias nam maiores sapiente
          modi omnis maxime veritatis voluptates autem nemo dicta commodi iste,
          eos nobis inventore eveniet vero praesentium fugit vel ab! Debitis
          perspiciatis consectetur quaerat minima nulla quidem dicta fugit,
          corporis quisquam magni, sed tempora. Nulla repudiandae assumenda odit
          quas voluptates architecto necessitatibus iusto ut doloremque.
          Consectetur fugiat, repudiandae enim doloremque, dolorem numquam
          laborum quos dolor, modi autem labore. Optio nesciunt labore
          blanditiis corrupti!
        </p>
      </FadeRight>

      <FadeLeft>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          commodi, quis nemo, iure repudiandae numquam ex laborum necessitatibus
          consectetur sapiente voluptate id qui earum fugiat sed? In enim
          reprehenderit, repellendus autem non cupiditate modi incidunt omnis
          saepe? Fuga in aliquam assumenda, sed deleniti vero nesciunt
          reiciendis nam quod dignissimos architecto. Consequatur, beatae
          temporibus delectus dolor ex cumque hic eum, tempore nemo aperiam ab
          voluptatum. Est laboriosam aliquid id consequatur. Sapiente obcaecati
          atque adipisci totam minus porro eos odit dolorum harum? Iure dolorem
          laudantium reprehenderit doloribus minima asperiores laboriosam,
          veniam fugiat architecto maxime tenetur. Unde expedita eaque officia
          blanditiis voluptas animi.
        </p>
      </FadeLeft>

      <FadeRight>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          dolor itaque vitae, sapiente perspiciatis rem doloremque velit, labore
          minus officia corrupti dolorum! Vero nulla ad nemo voluptatem id.
          Obcaecati id reprehenderit dicta enim? Ipsa alias nam maiores sapiente
          modi omnis maxime veritatis voluptates autem nemo dicta commodi iste,
          eos nobis inventore eveniet vero praesentium fugit vel ab! Debitis
          perspiciatis consectetur quaerat minima nulla quidem dicta fugit,
          corporis quisquam magni, sed tempora. Nulla repudiandae assumenda odit
          quas voluptates architecto necessitatibus iusto ut doloremque.
          Consectetur fugiat, repudiandae enim doloremque, dolorem numquam
          laborum quos dolor, modi autem labore. Optio nesciunt labore
          blanditiis corrupti!
        </p>
      </FadeRight>
    </div>
  );
}
