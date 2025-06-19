import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidationCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('ValidationCreateUserPipe called');
    console.log('Value:', value);
    console.log('Metadata:', metadata);

    if (typeof value !== 'object' || value === null) {
      throw new BadRequestException('Body must be a valid JSON object');
    }

    const { name, email } = value;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      throw new BadRequestException('Name must be a non-empty string');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      throw new BadRequestException('Email must be a valid email address');
    }

    return {
      ...value,
      name: name.trim(),
      email: email.toLowerCase(),
    };
  }
}
