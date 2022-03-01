import { Category } from '../category';

describe('Categoy Unit Test', () => {
  test('constructor of category', () => {
    const created_at = new Date();
    const category = new Category({
      name: 'Movie',
      description: 'description',
      is_active: true,
      created_at: created_at,
    });
    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'description',
      is_active: true,
      created_at: created_at,
    });
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('description');
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBe(created_at);
  });
});
