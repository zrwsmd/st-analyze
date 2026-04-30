import { DefaultDocumentValidator } from 'langium';

export class StDocumentValidator extends DefaultDocumentValidator {
    protected override getSource(): string | undefined {
        return 'st-analyze';
    }
}
