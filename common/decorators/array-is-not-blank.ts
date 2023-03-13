import { registerDecorator, ValidationOptions } from 'class-validator';

export function ArrayIsNotBlank(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'arrayIsNotBlank',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string[]) {
          return value.every(x => x.trim().length > 0);
        },
      },
    });
  };
}