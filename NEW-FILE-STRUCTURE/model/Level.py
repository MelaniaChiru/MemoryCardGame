class Level():
    def __init__(self, level_num, name, gird_size, sun, water, tractor, cloud, bug, scissor, dirt):
        self.level_num = level_num
        self.name = name
        self.gird_size = gird_size
        self.sun = sun
        self.water = water
        self.tractor = tractor
        self.cloud = cloud
        self.bug = bug
        self.scissor = scissor
        self.dirt = dirt
    
    def level_id(self):
        return self.level_num