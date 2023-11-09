import style from "./page.module.css";

export const metadata = {
  title: "Политика конфиденциальности",
  description: "Страница политики конфиденциальности",
  openGraph: {
    title: 'Политика конфиденциальности',
    description: 'Страница политики конфиденциальности',
    siteName: 'DriverAve',
    type: 'website',
  },
};


const Policy = () => {
  return (
    <div className="main_container">
      <h1 className={style.main_title}>Политика конфиденциальности</h1>
      <p className={style.main_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
        lacus maximus, dictum velit eu, vestibulum nunc. Suspendisse
        pellentesque tincidunt maximus. Nam tortor nibh, placerat non lectus
        nec, convallis tristique ex. Etiam finibus, lacus vitae eleifend
        elementum, enim lorem suscipit libero, eu suscipit purus sem nec est.
        Curabitur cursus a turpis in placerat. Donec eros diam, pretium ut justo
        ut, blandit tincidunt enim. Etiam eu feugiat est. Vestibulum condimentum
        interdum augue, id volutpat metus. Ut sollicitudin ac leo at imperdiet.
        Maecenas vitae facilisis elit. Vestibulum congue dui ultrices
        condimentum fermentum. Cras porta, tortor eget aliquet egestas, orci
        eros pulvinar tellus, sed sodales mi metus quis risus. Curabitur nunc
        purus, venenatis a justo sed, volutpat suscipit elit. Suspendisse
        malesuada est et velit bibendum suscipit. Quisque viverra odio dui, quis
        auctor tortor auctor in. Donec consectetur, sapien in ultrices pulvinar,
        magna sapien imperdiet sem, et vestibulum tellus velit id nisi. Ut
        sagittis, eros ut interdum vestibulum, ante nisl egestas lacus, ac
        aliquam orci risus eget tellus. Nam non augue massa. Mauris eros purus,
        viverra in cursus nec, placerat quis magna. Integer vitae fermentum mi,
        non egestas magna. Nam porttitor elementum lorem tincidunt rutrum. Nulla
        facilisi. Fusce id sem vitae justo tristique gravida ac quis metus.
        Mauris vitae est lacus. Pellentesque vitae sodales nulla. Sed commodo
        ultricies tortor quis maximus. Suspendisse potenti.
      </p>
    </div>
  );
};

export default Policy;
