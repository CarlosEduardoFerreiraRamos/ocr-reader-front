import { OCRServiceModule } from './ocrservice.module';

describe('OCRServiceModule', () => {
  let oCRServiceModule: OCRServiceModule;

  beforeEach(() => {
    oCRServiceModule = new OCRServiceModule();
  });

  it('should create an instance', () => {
    expect(oCRServiceModule).toBeTruthy();
  });
});
