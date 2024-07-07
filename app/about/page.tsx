function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl capitalize">
        we love
        <span className="bg-primary py-2 px-4 text-white rounded-lg">
          store
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg tracking-wide leading-8 mx-auto text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        esse impedit autem mollitia possimus enim recusandae iusto quas
        veritatis doloribus!
      </p>
    </section>
  );
}

export default AboutPage;
