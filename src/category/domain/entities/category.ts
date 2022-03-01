export type CategoryProperties = {
  name: string;
  description: string;
  is_active: boolean;
  created_at: Date;
};

export class Category {
  constructor(readonly props: CategoryProperties) {}

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get is_active(): boolean {
    return this.props.is_active;
  }

  get created_at(): Date {
    return this.props.created_at;
  }
}
