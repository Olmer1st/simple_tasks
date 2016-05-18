import os
from flask import Flask, render_template

# template_dir = os.path.dirname(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
# template_dir = os.path.join(template_dir, 'public')
app = Flask(__name__, template_folder='public', static_folder='public')

@app.route('/', defaults={'p': 'home'})
@app.route('/<path:p>')
def main(p):
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
