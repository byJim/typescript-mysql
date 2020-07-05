import express,{Application} from 'express';
import morgan from 'morgan';

//Routes
import IndexRouter from './routes/index';
import PostRouter from './routes/post';

export class App {
    private app: Application;

    constructor( private port? :number | string) {
        this.app = express();
        this.settings();
        this.middleware()
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000 );
    }

    routes(){
        this.app.use(PostRouter);
        this.app.use(IndexRouter)
    }

    middleware(){
        this.app.use(morgan(`dev`))
        this.app.use(express.json());
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', 3000)
    }
}
