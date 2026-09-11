import illustration from "@/shared/assets/under-construction.png";

/** Разделы, которые появятся на сайте. */
const sections = [
  {
    title: "Проекты",
    text: "Каталог проектов с журналом: название, краткое описание, команда, статус. Фильтрация по областям, технологиям и возрастной категории.",
  },
  {
    title: "Журнал",
    text: "Статьи, привязанные к проектам: история создания, разбор технологий, заметки из жизни команды. Можно читать и вне контекста проекта — как обычный блог.",
  },
  {
    title: "Команды",
    text: "Профили команд и авторов: что делают, чем гордятся, над чем работают сейчас, что читают. Чтобы можно было следить за проектами и людьми, которые вам интересны.",
  },
];

/** Задачи, которые в работе прямо сейчас. */
const roadmap = [
  {
    title: "Базовый каталог проектов",
    text: "структура карточек, добавление и отображение.",
  },
  {
    title: "Журнал и статьи",
    text: "привязка статей к проектам, редактор текстов, категории.",
  },
  {
    title: "Поиск и фильтры",
    text: "по областям, технологиям, статусу проекта.",
  },
];

export function UnderConstructionPage() {
  return (
    <main className="mx-auto flex w-full max-w-[var(--content-width)] flex-1 flex-col gap-16 px-6 pb-20 md:gap-24">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <h1 className="text-balance">
          ProjectLib — библиотека проектов, у которых есть история
        </h1>
        <p className="text-pretty text-muted-foreground">
          Хочу собрать авторов и помочь рассказать истории создания их проектов:
          какие технологии за ними стоят, какие проблемы пришлось решать и как
          живёт команда. Когда-нибудь тут будет полноценный каталог с журналом.
        </p>
        <p className="text-pretty text-muted-foreground">
          А пока — строю и ломаю, ломаю и строю.
        </p>
        <img
          src={illustration}
          alt="Кот-годзилла с довольным рыком шагает по городу и крушит небоскрёбы"
          loading="eager"
          width={512}
          height={512}
          className="mt-2 w-full max-w-sm md:max-w-md"
        />
      </section>

      <section className="flex flex-col gap-4 text-left">
        <h2>Что такое ProjectLib</h2>
        <p className="text-pretty">
          Это не ещё один каталог. ProjectLib — про людей и процессы. Каждый
          проект здесь привязан к журналу: статьям, заметкам и историям о том,
          как проект создавался, рос и жил. Вы читаете не только про результат,
          но и контекст: почему выбрали именно этот инструмент, как команда
          справилась с дедлайном и какие технологии оказались интереснее, чем
          казались на первый взгляд.
        </p>
        <p className="text-pretty">
          Проекты могут быть любыми — от робототехники до кулинарного
          приложения, от школьного проекта до инди-игр. Ограничения только в
          рамках здравого смысла и законодательства (не игнорируйте,
          пожалуйста!).
        </p>
      </section>

      <section className="flex flex-col gap-6 text-left">
        <h2>Что будет на сайте</h2>
        <ul className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
          {sections.map(({ title, text }) => (
            <li
              key={title}
              className="flex flex-col gap-2 rounded-lg border p-6"
            >
              <h3 className="text-lg font-medium text-[color:var(--text-h)]">
                {title}
              </h3>
              <p className="text-pretty text-sm text-muted-foreground">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6 text-left">
        <h2>Над чем работаю сейчас</h2>
        <ul className="flex list-none flex-col gap-4 p-0">
          {roadmap.map(({ title, text }) => (
            <li key={title} className="border-l-2 pl-4">
              <span className="font-medium text-[color:var(--text-h)]">
                {title}
              </span>{" "}
              — {text}
            </li>
          ))}
        </ul>
        <p className="text-pretty text-muted-foreground">
          Как только будет готова базовая страница журнала проекта, буду
          рассказывать о его продвижении прямо там.
        </p>
      </section>
    </main>
  );
}
