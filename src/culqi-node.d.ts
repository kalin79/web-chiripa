// culqi-node.d.ts
declare module 'culqi-node' {
    interface CulqiOptions {
        apiKey: string;
    }

    class Culqi {
        constructor(options: CulqiOptions);
        charges: {
            create(data: {
                amount: number;
                currency_code: string;
                email: string;
                source_id: string;
            }): Promise<any>;
        };
    }

    export default Culqi;
}
