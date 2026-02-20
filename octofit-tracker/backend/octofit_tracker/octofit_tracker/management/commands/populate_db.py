from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from datetime import date


class Command(BaseCommand):
    help = 'Populate the database with test data for OctoFit Tracker'

    def handle(self, *args, **kwargs):
        self.stdout.write('Clearing existing data...')
        Leaderboard.objects.all().delete()
        Activity.objects.all().delete()
        Team.objects.all().delete()
        Workout.objects.all().delete()
        User.objects.all().delete()

        self.stdout.write('Creating users...')
        users = []
        user_data = [
            {'username': 'thundergod', 'email': 'thundergod@mona.octofit.com', 'password': 'octofit2025!'},
            {'username': 'silverstreak', 'email': 'silverstreak@mona.octofit.com', 'password': 'octofit2025!'},
            {'username': 'shadowfox', 'email': 'shadowfox@mona.octofit.com', 'password': 'octofit2025!'},
            {'username': 'blazerunner', 'email': 'blazerunner@mona.octofit.com', 'password': 'octofit2025!'},
            {'username': 'nightowl', 'email': 'nightowl@mona.octofit.com', 'password': 'octofit2025!'},
        ]
        for data in user_data:
            user = User.objects.create(**data)
            users.append(user)
            self.stdout.write(f'  Created user: {user.username}')

        self.stdout.write('Creating teams...')
        team1 = Team.objects.create(name='Blue Lightning')
        team1.members.add(users[0], users[1], users[2])
        self.stdout.write(f'  Created team: {team1.name}')

        team2 = Team.objects.create(name='Red Thunder')
        team2.members.add(users[2], users[3], users[4])
        self.stdout.write(f'  Created team: {team2.name}')

        self.stdout.write('Creating activities...')
        activities_data = [
            {'user': users[0], 'activity_type': 'Running', 'duration': 30, 'date': date(2025, 4, 1)},
            {'user': users[0], 'activity_type': 'Cycling', 'duration': 45, 'date': date(2025, 4, 2)},
            {'user': users[1], 'activity_type': 'Swimming', 'duration': 60, 'date': date(2025, 4, 1)},
            {'user': users[1], 'activity_type': 'Running', 'duration': 20, 'date': date(2025, 4, 3)},
            {'user': users[2], 'activity_type': 'Yoga', 'duration': 40, 'date': date(2025, 4, 2)},
            {'user': users[3], 'activity_type': 'Weightlifting', 'duration': 50, 'date': date(2025, 4, 1)},
            {'user': users[3], 'activity_type': 'Running', 'duration': 35, 'date': date(2025, 4, 4)},
            {'user': users[4], 'activity_type': 'Cycling', 'duration': 55, 'date': date(2025, 4, 2)},
        ]
        for data in activities_data:
            Activity.objects.create(**data)
        self.stdout.write(f'  Created {len(activities_data)} activities')

        self.stdout.write('Creating leaderboard entries...')
        leaderboard_data = [
            {'user': users[0], 'total_points': 150, 'rank': 1},
            {'user': users[1], 'total_points': 120, 'rank': 2},
            {'user': users[3], 'total_points': 110, 'rank': 3},
            {'user': users[4], 'total_points': 90, 'rank': 4},
            {'user': users[2], 'total_points': 85, 'rank': 5},
        ]
        for data in leaderboard_data:
            Leaderboard.objects.create(**data)
        self.stdout.write(f'  Created {len(leaderboard_data)} leaderboard entries')

        self.stdout.write('Creating workouts...')
        workouts_data = [
            {'name': 'Morning HIIT', 'description': 'High intensity interval training to start your day with energy.', 'duration': 20, 'difficulty': 'hard'},
            {'name': 'Core Crusher', 'description': 'Focus on abs and core strength with bodyweight exercises.', 'duration': 15, 'difficulty': 'medium'},
            {'name': 'Gentle Yoga Flow', 'description': 'Relaxing yoga sequence for flexibility and mindfulness.', 'duration': 30, 'difficulty': 'easy'},
            {'name': 'Full Body Strength', 'description': 'Compound movements targeting all major muscle groups.', 'duration': 45, 'difficulty': 'hard'},
            {'name': 'Quick Cardio Blast', 'description': 'Short but effective cardio workout for busy days.', 'duration': 10, 'difficulty': 'medium'},
        ]
        for data in workouts_data:
            Workout.objects.create(**data)
        self.stdout.write(f'  Created {len(workouts_data)} workouts')

        self.stdout.write(self.style.SUCCESS('Successfully populated the database!'))
