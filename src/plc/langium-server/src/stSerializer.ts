import { AstNode, DefaultJsonSerializer, JsonDeserializeOptions, JsonSerializeOptions, LangiumCoreServices } from 'langium';
import { OuterComposeNode, convertOuterNode2ComposeNode, transform2AstNode } from './util/tool.js';

export class StSerializer extends DefaultJsonSerializer {
    constructor(services: LangiumCoreServices) {
        super(services);
    }

    override serialize(node: AstNode, options?: JsonSerializeOptions | undefined): string {
        return super.serialize(node, options);
    }

    override deserialize<T extends AstNode = AstNode>(content: string, options: JsonDeserializeOptions = {}): T {
        let jsonArrObj = JSON.parse(content);
        let outerComposeNodeArr = jsonArrObj as OuterComposeNode[];
        let composeNodeArr = convertOuterNode2ComposeNode(outerComposeNodeArr);
        let st = transform2AstNode(composeNodeArr);
        return st as unknown as T;
    }
}
