interface Command {
  Initialize(): void;

  Prompting(): void;

  Writing(): void;

  Installing(): void;

  Ending(): void;
}

interface Console {
}

export { Command, Console };