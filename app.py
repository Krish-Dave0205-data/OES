from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder="templates")

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///enroll.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Create database model for enrollment
class Enrollment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    course = db.Column(db.String(100), nullable=False)

with app.app_context():
    db.create_all()

@app.route("/")
def home():
    return render_template("index_2.html")

@app.route('/enroll', methods=['GET', 'POST'])
def enroll():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        course = request.form['course']

        # Validate form inputs
        if not name or not email or not course:
            return "All fields are required!", 400

        # Add new student to the database
        new_enrollment = Enrollment(name=name, email=email, course=course)
        try:
            db.session.add(new_enrollment)
            db.session.commit()
            return redirect(url_for('home'))
        except Exception as e:
            db.session.rollback()
            return f"An error occurred: {str(e)}"
    return render_template('enrollment.html')



@app.route('/view_details')
def view_details():
    # Retrieve all enrollments from the database
    all_enrollments = Enrollment.query.all()
    return render_template('view_details.html', enrollments=all_enrollments)


if __name__ == "__main__":
    app.run(debug=True)
