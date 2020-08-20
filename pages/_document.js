import Document, { Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <title>My Next.js Project</title>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
                    {/* This provides all admin-lte functionality - we copied the files to our static directory above */}
                    <script src="/static/adminlte.js" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
                    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js" integrity="sha512-M+hXwltZ3+0nFQJiVke7pqXY7VdtWW2jVG31zrml+eteTP7im25FdwtLhIBTWkaHRQyPrhO2uy8glLMHZzhFog==" crossOrigin="anonymous"></script>
                    <script src="/assets/js/adminlte.min.js" />
                </Head>
                <body className="sidebar-mini">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}


export default MyDocument;
