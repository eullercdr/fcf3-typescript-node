import { validate } from 'uuid';
import { Category, CategoryProperties } from '../category';

describe('Categoy Unit Test', () => {
  test('create a new category passing only name', () => {
    const category = new Category({
      name: 'Movie',
    });
    expect(category.name).toBe('Movie');
    expect(category.description).toBe(null);
    expect(category.is_active).toBe(true);
  });
  test('create a new category passing only name and description', () => {
    const category = new Category({
      name: 'Movie',
      description: 'Movie category',
    });
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('Movie category');
    expect(category.is_active).toBe(true);
    expect(category.created_at).toBeTruthy();
  });
  test('create a new category passing all fields', () => {
    const created_at = new Date();
    const category = new Category({
      name: 'Movie',
      description: 'Some Description',
      is_active: false,
      created_at: created_at,
    });
    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'Some Description',
      is_active: false,
      created_at: created_at,
    });
  });
  test('id field', () => {
    type CategoryData = { props: CategoryProperties; id?: string };
    const data: CategoryData[] = [
      { props: { name: 'Movie' } },
      { props: { name: 'Movie' }, id: null },
      { props: { name: 'Movie' }, id: undefined },
      { props: { name: 'Movie' }, id: '683d73d4-76e4-4e5f-baea-3327490f7211' },
    ];
    data.forEach((i) => {
      const category = new Category(i.props, i.id);
      expect(category.id).toBeTruthy();
      expect(validate(category.id)).toBeTruthy();
    });
  });
});
