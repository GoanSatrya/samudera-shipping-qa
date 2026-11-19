export type CleanupTask = () => Promise<void>;

export class DataCleanup {
  private readonly tasks: CleanupTask[] = [];

  register(task: CleanupTask): void {
    this.tasks.push(task);
  }

  async run(): Promise<void> {
    const errors: unknown[] = [];
    for (const task of this.tasks.reverse()) {
      try {
        await task();
      } catch (error) {
        errors.push(error);
      }
    }
    this.tasks.length = 0;
    if (errors.length > 0) {
      throw new AggregateError(errors, "One or more test-data cleanup tasks failed.");
    }
  }
}
