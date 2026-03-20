import { IToken, TokenType } from 'chevrotain';
import { LangiumParserErrorMessageProvider } from 'langium';

export class StParserErrorMessageProvider extends LangiumParserErrorMessageProvider {
    override buildMismatchTokenMessage({
        expected,
        actual
    }: {
        expected: TokenType;
        actual: IToken;
        previous: IToken;
        ruleName: string;
    }): string {
        const expectedMsg = expected.LABEL
            ? '`' + expected.LABEL + '`'
            : expected.name.endsWith(':KW')
              ? `keyword '${expected.name.substring(0, expected.name.length - 3)}'`
              : `token of type '${expected.name}'`;
        if (actual) {
            let image = actual.image;
            if (image) {
                if (actual.image.startsWith('ton')) {
                    return '';
                } else {
                    return `Expecting ${expectedMsg} but found \`${actual.image}\`.`;
                }
            } else {
                return `Expecting ${expectedMsg} but found \`${actual.image}\`.`;
            }
        } else {
            return ``;
        }
    }
    override buildNotAllInputParsedMessage({ firstRedundant }: { firstRedundant: IToken; ruleName: string }): string {
        return `Expecting end of file but found \`${firstRedundant.image}\`.`;
    }
}
