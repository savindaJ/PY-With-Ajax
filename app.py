from flask import Flask, render_template, request, json, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test', methods=['POST'])
def test_post():
    print(request.form)
    return '', 200


if __name__ == '__main__':
    app.run(
        host='127.0.0.1', port=5000, debug=True
    )
