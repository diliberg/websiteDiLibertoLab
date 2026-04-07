<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datasets Mindmap</title>
    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f9fafb;
        }
        .container {
            width: 90%;
            max-width: 1000px;
            background: white;
            padding: 2rem;
            border-radius: 12px;
            shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            border: 1px solid #e5e7eb;
        }
        h1 {
            color: #111827;
            text-align: center;
            margin-bottom: 2rem;
        }
        .mermaid {
            display: flex;
            justify-content: center;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Dataset Taxonomy</h1>
        
        <pre class="mermaid">
            mindmap
              root((datasets))
                speech
                  production
                  listening
                    )sung speech(
                    )regular speech(
                music
                  listening
                  imagined
                sign
        </pre>
    </div>

    <script>
        // Initialize Mermaid with a clean theme
        mermaid.initialize({ 
            startOnLoad: true,
            theme: 'base',
            themeVariables: {
                primaryColor: '#3b82f6',
                primaryTextColor: '#fff',
                lineColor: '#6366f1',
                fontSize: '16px'
            }
        });
    </script>
</body>
</html>
